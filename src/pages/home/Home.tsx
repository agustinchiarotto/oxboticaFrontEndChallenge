import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/header/Header';
import Table from '../../components/table/Table';
import LoadingSpinner from '../../components/loadingSpiner/LoadingSpinner';

import { getAllVehiclesService } from '../../services/vehicles/vehicles';
import { vehicle } from '../../types';

const createEmptyState = (): vehicle[] => [];

const Home = () => {
  const [vehicles, setVehicles] = useState(createEmptyState);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const fetchVehicles = async () => {
      const result = await getAllVehiclesService();
      const orderVehicles = result.payload.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setVehicles(orderVehicles);
      setIsLoading(false);
    };
    fetchVehicles();
  }, []);

  const navigateToTelemetry = (id: string) => {
    history.push(`/telemetry/${id}`);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <Header title={'Vehicles Information'} />
      <Table
        theadData={['Vehicle name', 'Plate number', 'Color']}
        tbodyData={vehicles}
        onClick={navigateToTelemetry}
      />
    </div>
  );
};

export default Home;
