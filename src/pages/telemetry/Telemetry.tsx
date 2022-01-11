import { useHistory, useParams } from 'react-router-dom';

import bateryIcon from '../../assets/bateryIcon.png';
import cupIcon from '../../assets/cupIcon.png';
import speedIcon from '../../assets/speedIcon.png';
import mapMarkerIcon from '../../assets/mapMarkerIcon.png';

import styles from './styles.module.css';
import { Card, Header, LoadingSpinner } from '../../components';
import routes from '../../constants/routes/routes';
import { useVehicle } from '../../shared/hooks/useVehicle';
import { useTelemetry } from '../../shared/hooks/useTelemetry';

const Telemetry = () => {
  let { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { data: vehicleData, isLoading: isLoadingVehicle, isError: isErrorVehicle } = useVehicle(
    id,
  );
  const {
    data: telemetyResult,
    isLoading: isLoadingTelemetry,
    isError: isErrorTelemetry,
  } = useTelemetry(id);

  if (isLoadingVehicle && isLoadingTelemetry) {
    return <LoadingSpinner />;
  }

  if (isErrorVehicle) {
    history.push(routes.NOT_FOUND);
  }

  if (isErrorTelemetry) {
    history.push(routes.ERROR_PAGE);
  }
  return (
    <div>
      <Header title={'Vehicle Telemetry Information'} />
      <h2>
        Vehicle name: <span className={styles.smallFontWeight}> {vehicleData?.name}</span>
      </h2>
      <h2>
        Plate number: <span className={styles.smallFontWeight}>{vehicleData?.plate_number} </span>
      </h2>

      <div className={styles.row}>
        <Card title={'Speed'} data={telemetyResult?.speed} img={speedIcon} />
        <Card title={'CPU usage'} data={telemetyResult?.cpu_usage} img={cupIcon} />
        <Card title={'Battery level'} data={telemetyResult?.battery_level} img={bateryIcon} />
        <Card
          title={'Coords'}
          data={`Lat: ${telemetyResult?.lat.toFixed(5)} Lng: ${telemetyResult?.lng.toFixed(5)}`}
          img={mapMarkerIcon}
        />
      </div>
    </div>
  );
};

export default Telemetry;
