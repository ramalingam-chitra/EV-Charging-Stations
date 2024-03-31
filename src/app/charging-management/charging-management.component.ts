import { Component, OnInit } from '@angular/core';
import { Station } from '../model/charging-model';

@Component({
  selector: 'app-charging-management',
  templateUrl: './charging-management.component.html',
  styleUrls: ['./charging-management.component.scss'],
})
export class ChargingManagementComponent implements OnInit {
  isPort2Disabled: boolean = false;
  isPort1Disabled: boolean = false;

  constructor() {}

  ngAfterViewInit() {}

  selectedStation: any;
  selectedWattPort1: any;
  selectedWattPort2: any;
  selectedCar: any;
  showChargingStationData: boolean = false;

  chargingStationData: Station[] = [
    {
      stationId: 1,
      stationName: 'Station 1',
      isPort1Available: false,
      selectedWattsForPort1Value: 0,
      isPort1Disabled: false,
      isPort2Available: false,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
      port1CarName: '',
      port1PersonName: '',
      port1Availablility: 'Not Available',
      port2CarName: '',
      port2PersonName: '',
      port2Availablility: 'Not Available'
    },
    {
      stationId: 2,
      stationName: 'Station 2',
      isPort1Available: false,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: false,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
      port1CarName: '',
      port1PersonName: '',
      port1Availablility: 'Not Available',
      port2CarName: '',
      port2PersonName: '',
      port2Availablility: 'Not Available'
    },
    {
      stationId: 3,
      stationName: 'Station 3',
      isPort1Available: false,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: true,
      isPort2Available: true,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
      port1CarName: '',
      port1PersonName: '',
      port1Availablility: 'Not Available',
      port2CarName: '',
      port2PersonName: '',
      port2Availablility: 'Available'
    },
    {
      stationId: 4,
      stationName: 'Station 4',
      isPort1Available: true,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: true,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
      port1CarName: '',
      port1PersonName: '',
      port1Availablility: 'Available',
      port2CarName: '',
      port2PersonName: '',
      port2Availablility: 'Available'
    },
    {
      stationId: 5,
      stationName: 'Station 5',
      isPort1Available: true,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: true,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
      port1CarName: '',
      port1PersonName: '',
      port1Availablility: 'Available',
      port2CarName: '',
      port2PersonName: '',
      port2Availablility: 'Available'
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
    if(port == 1) {
      this.isPort2Disabled = true;
    } else {
      this.isPort1Disabled = true;
    }
    if (event.value == "22") {
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

  changeStation(event: any) {
    //check port status and enable or disable watts and ports
    this.chargingStationData[event.value].isPort1Available = true;
    console.log("Selected station: ", event)
  }

  checkAvailablePorts(stationId: any) {
    for(const station of this.chargingStationData) {
      if(stationId === station.stationId.toString()){
        if(station.isPort1Available && station.isPort2Available){
          this.isPort1Disabled = false;
          this.isPort2Disabled = false;
        }else if(station.isPort1Available){
          this.isPort1Disabled = false;
        } else if(station.isPort2Available) {
          this.isPort2Disabled = false;
        } else {
          this.isPort1Disabled = true;
          this.isPort2Disabled = true;
        }
      }
    }
  }

  disableAllPorts() {
    this.disableAllStationAndPorts = true;
  }

  sendAlertToPerson( carId: number, message: string) {
    window.alert(carId + message)
  }

  startCharging(selectedCar: any, selectedStation: any, selectedWattPort1: any,selectedWattPort2: any ) {
    if(selectedWattPort1 == undefined && selectedWattPort2 == undefined){
      window.alert("Please select a Port to start charging");
      return;
    }
    this.chargingStationData.map((data) => {
      if(data.stationId.toString() === selectedStation){
        if(selectedWattPort1) {
          data.isPort1Available = false;
          data.port1Availablility = "Not available";
          data.port1CarName = this.getCarDetailsById(selectedCar).carName;
          data.port1PersonName = this.getCarDetailsById(selectedCar).personName;
          data.isPort2Disabled = this.isPort2Disabled = true;
        } else if(selectedWattPort2) {
          data.isPort2Available = false;
          data.port2Availablility = "Not available";
          data.port2CarName = this.getCarDetailsById(selectedCar).carName;
          data.port2PersonName = this.getCarDetailsById(selectedCar).personName;
          data.isPort1Disabled  = this.isPort2Disabled =  true;
        }
        this.sendAlertToPerson(selectedCar, "charging is in progress" );
      }
      console.log("car id : ", selectedCar +"charging is in progress");
    });
  }

  stopCharging(carId: number) {
    console.log ("so and so car has started charging");
   // chekcar status and send alert.
    this.sendAlertToPerson(carId, 'Charging station will be closed at 5PM');
  }

  enableAllPorts() {
    for(const station of this.chargingStationData) {
      station.isPort1Available = true;
      station.isPort2Available = true;
    }
  }

  showChargingStatus () {
    console.log("Car A is 65% charged.");
  }

  getCarDetailsById (carId: number) { 
    let details = {carName:'', personName: ''};
    details.carName = this.cars.find((p) => p.carId === carId)?.carName || '';
    details.personName = this.cars.find((p) => p.carId === carId)?.personName || '';
    return details;
  }
}
