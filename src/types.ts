export interface vehicle {
  id: string;
  name: string;
  color: string;
  plate_number: string;
}

export interface telemerty {
  vehicle_id: string;
  timestamp: number;
  lat: number;
  lng: number;
  speed: number;
  cpu_usage: number;
  battery_level: number;
}
