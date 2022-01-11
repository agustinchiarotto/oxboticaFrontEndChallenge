import { useQuery } from 'react-query';

import { fecthServer } from '../../services/fetchServer';
import { API_URL } from '../../config';

export const getTelemetryFromIdEndpoint = ({ id }: { id: string }) =>
  `${API_URL}/vehicles/${id}/telemetry`;

const fetchTelemetry = async (vehicleId: string) =>
  fecthServer({ method: 'GET', url: getTelemetryFromIdEndpoint({ id: vehicleId }) });

export const useTelemetry = (vehicleId: string) => {
  return useQuery(['search_telemetry'], () => fetchTelemetry(vehicleId), {
    keepPreviousData: false,
    enabled: true,
    refetchInterval: 1000,
  });
};
