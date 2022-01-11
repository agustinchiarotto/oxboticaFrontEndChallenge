import { useHistory } from 'react-router-dom';

import { Header, LoadingSpinner, Table } from '../../components';
import routes from '../../constants/routes/routes';
import { useVehicles } from '../../shared/hooks/useVehicles';

const Home = () => {
  const { data: vehicles, isLoading, isError } = useVehicles();
  const history = useHistory();

  const navigateToTelemetry = (id: string) => {
    history.push(`/telemetry/${id}`);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    history.push(routes.ERROR_PAGE);
  }

  return (
    <div>
      <Header title={'Vehicles Information'} />
      <Table
        theadData={['Vehicle name', 'Plate number', 'Color']}
        tbodyData={vehicles}
        onClickRow={navigateToTelemetry}
      />
    </div>
  );
};

export default Home;
