import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useInterval from '../../utils/setIntervalHook';
import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import { getTelemetryFromIdService, getVehicleFromId } from '../../services/vehicles/vehicles';
import { telemerty, vehicle } from '../../types';

import bateryIcon from '../../assets/bateryIcon.png';
import cupIcon from '../../assets/cupIcon.png';
import speedIcon from '../../assets/speedIcon.png';
import mapMarkerIcon from '../../assets/mapMarkerIcon.png';

import styles from './styles.module.css';
import LoadingSpinner from '../../components/loadingSpiner/LoadingSpinner';

const createEmptyTelemetryState = (): telemerty => {
  return {
    vehicle_id: '',
    timestamp: 0,
    lat: 0,
    lng: 0,
    speed: 0,
    cpu_usage: 0,
    battery_level: 0,
  };
};

const createEmptyVehicleState = (): vehicle => {
  return {
    id: '',
    name: '',
    color: '',
    plate_number: '',
  };
};

const Telemetry = () => {
  let { id } = useParams<{ id: string }>();

  const [telemetyResult, setTelemetyResult] = useState(createEmptyTelemetryState);
  const [vehicleData, setVehicleData] = useState(createEmptyVehicleState());
  const [fetchData, setFetchData] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  const fetchTelemetry = async () => {
    try {
      const result = await getTelemetryFromIdService({ id });
      setTelemetyResult(result.payload);
      setFetchData(false);
    } catch (error) {
      console.log('There was an error on fetching telemetry data:', error);
    }
  };

  const fetchVehicle = async () => {
    try {
      //Here it should go to redux store, because I already have this information. There is no need to go to API to find it,
      //but I didn't have the time to do it.
      //A second option would be send this information by params, but is not the idea of this screen to handle thoose params.
      const result = await getVehicleFromId({ id });
      setVehicleData(result.payload);
      setisLoading(false);
    } catch (error) {
      console.log('There was an error on fetching vehicle data:', error);
    }
  };

  useEffect(() => {
    fetchTelemetry();
  }, [fetchData]);

  useEffect(() => {
    fetchVehicle();
  }, []);

  useInterval(() => {
    setFetchData(true); //This will activate the useEffect and fetch the data again
  }, 1000);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Header title={'Vehicle Telemetry Information'} />
      <h2>
        Vehicle name: <span className={styles.smallFontWeight}> {vehicleData.name}</span>
      </h2>
      <h2>
        Plate number: <span className={styles.smallFontWeight}>{vehicleData.plate_number} </span>
      </h2>

      <div className={styles.row}>
        <Card title={'Speed'} data={telemetyResult.speed} img={speedIcon} />
        <Card title={'CPU usage'} data={telemetyResult.cpu_usage} img={cupIcon} />
        <Card title={'Battery level'} data={telemetyResult.battery_level} img={bateryIcon} />
        <Card
          title={'Coords'}
          data={`Lat: ${telemetyResult.lat.toFixed(5)} Lng: ${telemetyResult.lng.toFixed(5)}`}
          img={mapMarkerIcon}
        />
      </div>
    </div>
  );
};

export default Telemetry;
