import { telemerty, vehicle } from '../../types';
import {
  getAllVehiclesEndpoint,
  getTelemetryFromIdEndpoint,
  getVehicleFromIdEndpoint,
} from './endpoints';
import { fecthServer } from '../fetchServer';

interface VehiclesServiceResponse {
  success: boolean;
  payload: vehicle[];
  error: string;
}

interface VehicleServiceResponse {
  success: boolean;
  payload: vehicle;
  error: string;
}

interface TelemetryServiceResponse {
  success: boolean;
  payload: telemerty;
  error: string;
}

export const getAllVehiclesService = async (): Promise<VehiclesServiceResponse> => {
  const result = await fecthServer(getAllVehiclesEndpoint());
  return {
    success: result.success,
    payload: result.payload,
    error: result.error,
  };
};

export const getTelemetryFromIdService = async ({
  id,
}: {
  id: string;
}): Promise<TelemetryServiceResponse> => {
  const result = await fecthServer(getTelemetryFromIdEndpoint({ id }));
  return {
    success: result.success,
    payload: result.payload,
    error: result.error,
  };
};

export const getVehicleFromId = async ({ id }: { id: string }): Promise<VehicleServiceResponse> => {
  const result = await fecthServer(getVehicleFromIdEndpoint({ id }));
  return {
    success: result.success,
    payload: result.payload,
    error: result.error,
  };
};
