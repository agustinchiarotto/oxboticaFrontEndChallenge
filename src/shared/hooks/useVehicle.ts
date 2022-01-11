import { fecthServer } from './../../services/fetchServer';
import { useQuery } from 'react-query';
import { API_URL } from '../../config';

export const getVehicleFromIdEndpoint = ({ id }: { id: string }) => `${API_URL}/vehicles/${id}`;

const fetchVehicle = async (vehicleId: string) =>
  fecthServer({ method: 'GET', url: getVehicleFromIdEndpoint({ id: vehicleId }) });

export const useVehicle = (vehicleId: string) => {
  return useQuery(['search_vehicle', vehicleId], () => fetchVehicle(vehicleId), {
    keepPreviousData: true,
    enabled: true,
  });
};
