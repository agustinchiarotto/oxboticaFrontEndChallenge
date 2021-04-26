import { API_URL } from '../../config';

export const getAllVehiclesEndpoint = () => `${API_URL}/vehicles`;

export const getTelemetryFromIdEndpoint = ({ id }: { id: string }) =>
  `${API_URL}/vehicles/${id}/telemetry`;

export const getVehicleFromIdEndpoint = ({ id }: { id: string }) => `${API_URL}/vehicles/${id}`;
