export interface Employee {
  id : number,	
  firstname:string,	
  lastname:string,	
  email:string,
  gender:string,	
  jobtitle:string,
  department:string,
  project: Project
}

export interface Project{
  name:string,
  id:number
}

export interface Station {
  stationId: number;
  stationName: string;
  isPort1Available: boolean;
  selectedWattsForPort1Value: number;
  isPort1Disabled: boolean;
  isPort2Available: boolean;
  selectedWattsForPort2Value: number;
  isPort2Disabled: boolean;
}

