interface VehicleTelemetry {
  vehicle_id: string;
  timestamp: number;
  lat: number;
  lng: number;
  speed: number;
  cpu_usage: number;
  battery_level: number;
}

export default VehicleTelemetry;
