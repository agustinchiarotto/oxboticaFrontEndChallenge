import { useQuery } from 'react-query';
import { fecthServer } from './../../services/fetchServer';
import { Vehicle } from '../../constants/interfaces';
import { API_URL } from '../../config';

export const getAllVehiclesEndpoint = () => `${API_URL}/vehicles`;

const fetchVehicles = async () => fecthServer({ method: 'GET', url: getAllVehiclesEndpoint() });

export const useVehicles = () => {
  return useQuery(
    ['search_vehicles'],
    async () => {
      const result = await fetchVehicles();
      return result.sort((a: Vehicle, b: Vehicle) => {
        return a.name.localeCompare(b.name);
      });
    },
    {
      keepPreviousData: true,
      enabled: true,
    },
  );
};
