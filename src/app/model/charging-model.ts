export interface Station {
  stationId: number;
  stationName: string;
  isPort1Available: boolean;
  selectedWattsForPort1Value: number;
  isPort1Disabled: boolean;
  isPort2Available: boolean;
  port1RemainingHrs:number
  selectedWattsForPort2Value: number;
  isPort2Disabled: boolean;
  port1CarName: string;
  port1PersonName: string;
  port1Availablility: string;
  port2CarName: string;
  port2PersonName: string;
  port2Availablility: string;
  port2RemainingHrs:number;
  port1Timer: string;
  port2Timer: string;
}

export interface PortDetails {
  carId: number,
  personId: number,
  portAvailablility: string
}