import { Component, OnInit } from '@angular/core';
import { Station } from '../model/charging-model';

@Component({
  selector: 'app-charging-management',
  templateUrl: './charging-management.component.html',
  styleUrls: ['./charging-management.component.scss'],
})
export class ChargingManagementComponent implements OnInit {

  constructor() {}

  ngAfterViewInit() {}

  selectedStation: any;
  selectedWattPort1: any;
  selectedWattPort2: any;
  showChargingStationData: boolean = false;

  chargingStationData: Station[] = [
    {
      stationId: 0,
      stationName: 'Station1',
      isPort1Available: false,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: false,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
    },
    {
      stationId: 1,
      stationName: 'Station2',
      isPort1Available: false,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: false,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
    },
    {
      stationId: 2,
      stationName: 'Station3',
      isPort1Available: true,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: true,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
    },
    {
      stationId: 3,
      stationName: 'Station4',
      isPort1Available: true,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: true,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
    },
    {
      stationId: 4,
      stationName: 'Station5',
      isPort1Available: true,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: true,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
    },
  ];

  availableWatts = [
    {
      value: 3.2,
      displayName: '3.2 KWh',
    },
    {
      value: 7.2,
      displayName: '7.2 KWh',
    },
    {
      value: 11,
      displayName: '11 KWh',
    },
    {
      value: 22,
      displayName: '22 KWh',
    },
  ];

  availableStations = [
    {
      stationId: 3.2,
      displayName: '3.2 KWh',
    },
    {
      value: 7.2,
      displayName: '7.2 KWh',
    },
    {
      value: 11,
      displayName: '11 KWh',
    },
    {
      value: 22,
      displayName: '22 KWh',
    },
  ];

  cars = [
    {
      carId: 1,
      availableCharge: 0,
      carName: 'TES1',
      personName: 'PERS1',
    },
    {
      carId: 2,
      availableCharge: 0,
      carName: 'TES2',
      personName: 'PERS2',
    },
    {
      carId: 3,
      availableCharge: 0,
      carName: 'TES3',
      personName: 'PERS3',
    },
    {
      carId: 4,
      availableCharge: 0,
      carName: 'TES4',
      personName: 'PERS4',
    },
    {
      carId: 5,
      availableCharge: 0,
      carName: 'TES5',
      personName: 'PERS5',
    },
    {
      carId: 6,
      availableCharge: 0,
      carName: 'TES6',
      personName: 'PERS6',
    },
    {
      carId: 7,
      availableCharge: 0,
      carName: 'TES7',
      personName: 'PERS7',
    },
    {
      carId: 8,
      availableCharge: 0,
      carName: 'TES8',
      personName: 'PERS8',
    },
    {
      carId: 9,
      availableCharge: 0,
      carName: 'TES9',
      personName: 'PERS9',
    },
    {
      carId: 10,
      availableCharge: 0,
      carName: 'TES10',
      personName: 'PERS10',
    },
    {
      carId: 11,
      availableCharge: 0,
      carName: 'TES11',
      personName: 'PERS11',
    },
    {
      carId: 12,
      availableCharge: 0,
      carName: 'TES12',
      personName: 'PERS12',
    },
    {
      carId: 13,
      availableCharge: 0,
      carName: 'TES13',
      personName: 'PERS13',
    },
    {
      carId: 14,
      availableCharge: 0,
      carName: 'TES14',
      personName: 'PERS14',
    },
    {
      carId: 15,
      availableCharge: 0,
      carName: 'TES15',
      personName: 'PERS14',
    },
  ];
  disableAllStationAndPorts: boolean = false; //change to true while checking time

  ngOnInit() {
    let today = new Date();
    //if (today.getHours() <= 8 && today.getHours() >= 17){
      if (false){
      console.log('Charging station is open only between 8AM and 5PM');
      this.disableAllPorts();
    }
    console.log('charging stations detail : ', this.chargingStationData);
    console.log('car detail : ', this.cars);
  }

  ngDoCheck() {}
  changeWatts(event: any, station: any, port: number) {
    debugger;
    if (event.target.value == "22") {
      if(port == 1) {
        this.chargingStationData[station].isPort2Disabled = true;
      } else {
        this.chargingStationData[station].isPort1Disabled = true;
      }
    }else {
      this.chargingStationData[station].isPort2Disabled = false;
      this.chargingStationData[station].isPort1Disabled = false;
    }
    console.log('selected value', event.target.value);
    //this.selected = event.target.value;
  }

  changeStation(event: any, chargingStation: any) {
    //check port status and enable or disable watts and ports
    console.log("Selected station: ", event)
    console.log("station: ", chargingStation)
  }

  checkAvailableChargingStations() {
    this.showChargingStationData = true;
    for(const station of this.chargingStationData) {
      if(station.isPort1Available){
        window.alert("Port 1 in " + station.stationId + " is open for charging")
        return station;
      } else if(station.isPort2Available) {
        window.alert("Port 2 in " + station.stationId + " is open for charging")
        return station;
      }
    }
    return;
  }

  disableAllPorts() {
    this.disableAllStationAndPorts = true;
  }

  sendAlertToPerson( carId: number, isCharged?: boolean, isStationClosed?: boolean) {

  }

  startCharging(carId: number, station : any, selectedPort: number, ) {
    if(selectedPort === 1) {
      station.isPort1Available = false;
    } else if(selectedPort === 1) {
      station.isPort2Available = false;
    }
    console.log ("so and so car has started charging");
    return station;
  }

  stopCharging(carId?: number) {
    console.log ("so and so car has started charging");
   // chekcar status and send alert.
    this.sendAlertToPerson(1);
  }

  enableAllPorts() {
    for(const station of this.chargingStationData) {
      station.isPort1Available = true;
      station.isPort2Available = true;
    }
  }

  showCarsInQueue () {

  }

  showChargingStatus () {
    console.log("Car A is 65% charged.");
  }
}
