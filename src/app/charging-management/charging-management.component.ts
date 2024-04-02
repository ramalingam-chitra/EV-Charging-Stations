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

  constructor() { }

  ngAfterViewInit() { }

  selectedStation: any;
  selectedWattPort1: any;
  selectedWattPort2: any;
  selectedCar: any;
  selectedCarForStopCharge: any;
  chargeStopMessage = '';
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
      port1CarName: 'TES1',
      port1PersonName: 'PER1',
      port1Availablility: 'Not Available',
      port2CarName: 'TES2',
      port2PersonName: 'PER2',
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
      port1CarName: 'TES3',
      port1PersonName: 'PER3',
      port1Availablility: 'Not Available',
      port2CarName: 'TES4',
      port2PersonName: 'PER4',
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
      port1CarName: 'TES5',
      port1PersonName: 'PER5',
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
      chargingStatus: 'In Progress'
    },
    {
      carId: 2,
      availableCharge: 0,
      carName: 'TES2',
      personName: 'PERS2',
      chargingStatus: 'In Progress'
    },
    {
      carId: 3,
      availableCharge: 0,
      carName: 'TES3',
      personName: 'PERS3',
      chargingStatus: 'In Progress'
    },
    {
      carId: 4,
      availableCharge: 0,
      carName: 'TES4',
      personName: 'PERS4',
      chargingStatus: 'In Progress'
    },
    {
      carId: 5,
      availableCharge: 0,
      carName: 'TES5',
      personName: 'PERS5',
      chargingStatus: 'In Progress'
    },
    {
      carId: 6,
      availableCharge: 0,
      carName: 'TES6',
      personName: 'PERS6',
      chargingStatus: 'In Queue'
    },
    {
      carId: 7,
      availableCharge: 0,
      carName: 'TES7',
      personName: 'PERS7',
      chargingStatus: 'In Queue'
    },
    {
      carId: 8,
      availableCharge: 0,
      carName: 'TES8',
      personName: 'PERS8',
      chargingStatus: 'In Queue'
    },
    {
      carId: 9,
      availableCharge: 0,
      carName: 'TES9',
      personName: 'PERS9',
      chargingStatus: 'In Queue'
    },
    {
      carId: 10,
      availableCharge: 0,
      carName: 'TES10',
      personName: 'PERS10',
      chargingStatus: 'In Queue'
    },
    {
      carId: 11,
      availableCharge: 0,
      carName: 'TES11',
      personName: 'PERS11',
      chargingStatus: 'In Queue'
    },
    {
      carId: 12,
      availableCharge: 0,
      carName: 'TES12',
      personName: 'PERS12',
      chargingStatus: 'In Queue'
    },
    {
      carId: 13,
      availableCharge: 0,
      carName: 'TES13',
      personName: 'PERS13',
      chargingStatus: 'In Queue'
    },
    {
      carId: 14,
      availableCharge: 0,
      carName: 'TES14',
      personName: 'PERS14',
      chargingStatus: 'In Queue'
    },
    {
      carId: 15,
      availableCharge: 0,
      carName: 'TES15',
      personName: 'PERS14',
      chargingStatus: 'In Queue'
    },
  ];

  carsInUse: any[] = [];
  disableAllStationAndPorts: boolean = false; //change to true while checking time

  ngOnInit() {
    let today = new Date();
    if (today.getHours() <= 8 && today.getHours() >= 17) {
      //if (false){
      console.log('Charging station is open only between 8AM and 5PM');
      this.disableAllPorts();
    }
    console.log('charging stations detail : ', this.chargingStationData);
    console.log('car detail : ', this.cars);
  }

  ngDoCheck() { }
  changeWatts(event: any, station: any, port: number) {
    debugger;
    if (port == 1) {
      this.isPort2Disabled = true;
    } else {
      this.isPort1Disabled = true;
    }
    if (event.value == "22") {
      if (port == 1) {
        this.chargingStationData[station].isPort2Disabled = true;
      } else {
        this.chargingStationData[station].isPort1Disabled = true;
      }
    } else {
      this.chargingStationData[station].isPort2Disabled = false;
      this.chargingStationData[station].isPort1Disabled = false;
    }
  }

  changeStation(event: any) {
    //check port status and enable or disable watts and ports
    this.chargingStationData[event.value].isPort1Available = true;
    console.log("Selected station: ", event)
  }

  checkAvailablePorts(stationId: any) {
    for (const station of this.chargingStationData) {
      if (stationId === station.stationId.toString()) {
        if (station.isPort1Available && station.isPort2Available) {
          this.isPort1Disabled = false;
          this.isPort2Disabled = false;
        } else if (station.isPort1Available) {
          this.isPort1Disabled = false;
        } else if (station.isPort2Available) {
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

  sendAlertToPerson(carId: any, message: string) {
    window.alert(carId + message)
  }

  startCharging(selectedCar: any, selectedStationId: any, selectedWattPort1: any, selectedWattPort2: any) {
    if (selectedWattPort1 == undefined && selectedWattPort2 == undefined) {
      window.alert("Please select a Port to start charging");
      return;
    }
    let car = this.getCarDetailsById(selectedCar);
    this.updateCarStatus(selectedCar, "In Progress");
    let selectedStation = this.chargingStationData.find((p) => p.stationId.toString() === selectedStationId);
    if (selectedWattPort1 && selectedStation) {
      selectedStation.isPort1Available = false;
      selectedStation.port1Availablility = "Not available";
      selectedStation.port1CarName = car?.carName || '';
      selectedStation.port1PersonName = car?.personName || '';
      selectedStation.isPort2Disabled = this.isPort2Disabled = true;
    } else if (selectedWattPort2 && selectedStation) {
      selectedStation.isPort2Available = false;
      selectedStation.port2Availablility = "Not available";
      selectedStation.port2CarName = car?.carName || '';
      selectedStation.port2PersonName = car?.personName || '';
      selectedStation.isPort1Disabled = this.isPort2Disabled = true;
    }
    this.sendAlertToPerson(selectedCar, "charging is in progress");
    this.carsInUse.push(this.getCarDetailsById(selectedCar));
    this.cars = this.cars.filter(car => car.carId != selectedCar);
    console.log("car id : ", selectedCar + "charging is in progress");
  }

  enableAllPorts() {
    for (const station of this.chargingStationData) {
      station.isPort1Available = true;
      station.isPort2Available = true;
    }
  }

  showChargingStatus() { //Next phase
    console.log("Car A is 65% charged.");
  }

  getCarDetailsById(carId: number) {
    return this.cars.find((p) => p.carId === carId);
  }

  updateCarStatus(selectedCar: any, status: string) {
    this.cars.map((data) => {
      if (data.carId === selectedCar) {
        data.chargingStatus = status;
      }
    })
  }

  stopCharging(selectedCar: any) {
    this.chargeStopMessage = "";
    let carDetail = this.getCarDetailsById(selectedCar);
    this.chargingStationData.map((data) => {
      if (carDetail?.carName === data.port1CarName) { //modal popup
        data.isPort1Available = true;
        data.port1Availablility = "Available";
        data.port1CarName = '';
        data.port1PersonName = '';
        this.sendAlertToPerson(carDetail.carName, ' charging in Port 1 is stopped');
      } else if (carDetail?.carName === data.port2CarName) {
        data.isPort2Available = true;
        data.port2Availablility = "Available";
        data.port2CarName = '';
        data.port2PersonName = '';
        this.sendAlertToPerson(carDetail.carName, ' charging in Port 2 is stopped');
      }
      this.updateCarStatus(selectedCar, "Completed");
      this.carsInUse = this.carsInUse.filter(car => car.carId != selectedCar);
    })
  }

  checkCarStatus() {
    this.cars.map((data) => {
      if (data.chargingStatus === 'In Progress' || data.chargingStatus === 'Completed') {
        return true;
      } else {
        return false;
      }
    })
    return false;
  }
}
