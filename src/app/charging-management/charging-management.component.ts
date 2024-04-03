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
  time: number = 0;
  display: any;
  interval: any;
  selectedStation: any;
  selectedWattPort1: any;
  selectedWattPort2: any;
  selectedCar: any;
  selectedCarForStopCharge: any;
  chargeStopMessage = '';
  showChargingStationData: boolean = false;
  currentValue: any;

  constructor() { }

  ngAfterViewInit() {
    let today = new Date();
    if (today.getHours() <= 8 || today.getHours() >= 17) {
      this.disableAllPorts();
      window.alert('Charging station is open only between 8AM and 5PM');
    }
  }
  //Data model value
  chargingStationData: Station[] = [
    {
      stationId: 1,
      stationName: 'Station 1',
      isPort1Available: true,
      selectedWattsForPort1Value: 0,
      isPort1Disabled: false,
      isPort2Available: true,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
      port1CarName: '-',
      port1PersonName: '-',
      port1Availablility: 'Available',
      port1RemainingHrs: 0,
      port2CarName: '-',
      port2PersonName: '-',
      port2Availablility: 'Available',
      port2RemainingHrs: 0,
      port1Timer: '',
      port2Timer: ''
    },
    {
      stationId: 2,
      stationName: 'Station 2',
      isPort1Available: true,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: true,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
      port1CarName: '-',
      port1PersonName: '-',
      port1Availablility: 'Available',
      port1RemainingHrs: 0,
      port2CarName: '-',
      port2PersonName: '-',
      port2Availablility: 'Available',
      port2RemainingHrs: 0,
      port1Timer: '',
      port2Timer: ''
    },
    {
      stationId: 3,
      stationName: 'Station 3',
      isPort1Available: true,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: true,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
      port1CarName: '-',
      port1PersonName: '-',
      port1Availablility: 'Available',
      port1RemainingHrs: 0,
      port2CarName: '-',
      port2PersonName: '-',
      port2Availablility: 'Available',
      port2RemainingHrs: 0,
      port1Timer: '',
      port2Timer: ''
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
      port1CarName: '-',
      port1PersonName: '-',
      port1Availablility: 'Available',
      port1RemainingHrs: 0,
      port2CarName: '-',
      port2PersonName: '-',
      port2Availablility: 'Available',
      port2RemainingHrs: 0,
      port1Timer: '',
      port2Timer: ''
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
      port1CarName: '-',
      port1PersonName: '-',
      port1Availablility: 'Available',
      port1RemainingHrs: 0,
      port2CarName: '-',
      port2PersonName: '-',
      port2Availablility: 'Available',
      port2RemainingHrs: 0,
      port1Timer: '',
      port2Timer: ''
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

  cars = [
    {
      carId: 1,
      availableCharge: 0,
      carName: 'TES1',
      personName: 'PERS1',
      chargingStatus: 'In Queue'
    },
    {
      carId: 2,
      availableCharge: 0,
      carName: 'TES2',
      personName: 'PERS2',
      chargingStatus: 'In Queue'
    },
    {
      carId: 3,
      availableCharge: 0,
      carName: 'TES3',
      personName: 'PERS3',
      chargingStatus: 'In Queue'
    },
    {
      carId: 4,
      availableCharge: 0,
      carName: 'TES4',
      personName: 'PERS4',
      chargingStatus: 'In Queue'
    },
    {
      carId: 5,
      availableCharge: 0,
      carName: 'TES5',
      personName: 'PERS5',
      chargingStatus: 'In Queue'
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
  carsInQueue: any[] = this.cars;

  disableAllStationAndPorts: boolean = true;

  ngOnInit() {}

  /** Func: changeWatts
  * Desc: When user changes the Watts in port 1 or port 2 enable or disable values
  * Params: change event, selected station, selected port
  * Return: none
  **/
  changeWatts(event: any, station: any, port: number) {
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

 /** Func: checkAvailablePorts
  * Desc: When user changes the station enable or disable port
  * Params: Selected station id
  * Return: none
  **/
  checkAvailablePorts(stationId: any) {
    for (const station of this.chargingStationData) {
      if (stationId === station.stationId.toString()) {
        if (station.isPort1Available && station.isPort2Available) {
          this.isPort1Disabled = false;
          this.isPort2Disabled = false;
        } else if (station.isPort1Available) {
          this.isPort1Disabled = false;
          this.isPort2Disabled = true;
        } else if (station.isPort2Available) {
          this.isPort2Disabled = false;
          this.isPort1Disabled = true;
        } else {
          this.isPort1Disabled = true;
          this.isPort2Disabled = true;
        }
      }
    }
  }

  /** Func: disableAllPorts
  * Desc: Disable all ports during non business hours
  * Params: Selected station id
  * Return: none
  **/
  disableAllPorts() {
    this.disableAllStationAndPorts = true;
  }

  /** Func: sendAlertToPerson
  * Desc: Send alert to person whenever port is available, closed, charging initiated, charging completed
  * Params: Person id, car id, message
  * Return: none
  **/
  sendAlertToPerson(personId: any, carId: any, message: string) {
    window.alert('Dear ' + personId + ", " + carId + message)
  }

  /** Func: startCharging
  * Desc: Start charging a car based on station, port selection, current charge and calculate remaining hours
  * Params: selectedCar, selectedStationId, selectedWattPort1, selectedWattPort2, currentValue
  * Return: none
  **/
  startCharging(selectedCar: any, selectedStationId: any, selectedWattPort1: any, selectedWattPort2: any, currentValue: any) {
    if (selectedCar == undefined) {
      window.alert("Please select Car");
      return;
    }
    if (selectedWattPort1 == undefined && selectedWattPort2 == undefined) {
      window.alert("Please select a Port to start charging");
      return;
    }
    if (currentValue == undefined || currentValue == null) {
      window.alert("Please provide current battery level in KW");
      return;
    }
    let car = this.getCarDetailsById(selectedCar);
    this.updateCarStatus(selectedCar, currentValue, "In Progress");
    let selectedStation = this.chargingStationData.find((p) => p.stationId.toString() === selectedStationId);
    if (selectedWattPort1 && selectedStation) {
      selectedStation.isPort1Available = false;
      selectedStation.port1Availablility = "Not available";
      selectedStation.port1CarName = car?.carName || '';
      selectedStation.port1PersonName = car?.personName || '';
      selectedStation.isPort2Disabled = this.isPort2Disabled = true;
      selectedStation.port1RemainingHrs = this.calHoursOfCharging(car?.personName, car?.carName, car?.availableCharge, selectedWattPort1);
      this.startTimer(selectedStation, 1, selectedStation.port1CarName, selectedStation.port1PersonName, selectedStation.port1RemainingHrs);
    } else if (selectedWattPort2 && selectedStation) {
      selectedStation.isPort2Available = false;
      selectedStation.port2Availablility = "Not available";
      selectedStation.port2CarName = car?.carName || '';
      selectedStation.port2PersonName = car?.personName || '';
      selectedStation.isPort1Disabled = this.isPort2Disabled = true;
      selectedStation.port2RemainingHrs = this.calHoursOfCharging(car?.personName, car?.carName, car?.availableCharge, selectedWattPort2);
      this.startTimer(selectedStation, 2, selectedStation.port2CarName, selectedStation.port2PersonName, selectedStation.port2RemainingHrs);
    }
    this.carsInUse.push(this.getCarDetailsById(selectedCar));
    this.carsInQueue = this.carsInQueue.filter(car => car.carId != selectedCar);
    this.clearStationAndPort();
    this.currentValue = '';
  }

  /** Func: startTimer
  * Desc: Start the count down for the charged car and send alert to person when charging completed
  * Params:selectedStation, selectedPort, carName, personName, remainingHrs
  * Return: none
  **/
  startTimer(selectedStation: any, selectedPort: number, carName: string, personName: string, remainingHrs: number): string {
    this.time = remainingHrs * 3600;
    this.interval = setInterval(() => {
      if (this.time != 0) {
        this.time--;
      } else {
        this.time--;
      }
      this.display = this.transform(this.time);
      if (this.display === '0:0:0') {
        this.sendAlertToPerson(carName, personName, ' charging is completed')
      }
      if (selectedPort == 1) {
        selectedStation.port1Timer = this.display;
      }
      else if (selectedPort == 2) {
        selectedStation.port2Timer = this.display;
      }
    }, 1000);
    return this.display;
  }

  /** Func: transform
  * Desc: Calculate remaining hrs based on current date time
  * Params: remaining Hours In Seconds
  * Return: value in hours, minutes and seconds
  **/
  transform(value: number): string {
    var sec_num = value;
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = 0; }
    if (minutes < 10) { minutes = 0; }
    if (seconds < 0) { seconds = 0; }
    return Math.round(hours) + ':' + Math.round(minutes) + ':' + Math.round(seconds);
  }

  /** Func: calHoursOfCharging
  * Desc: Calculate remaining hrs based on current battery level and send alert as charging initiated
  * Params: person, selectedCar, availableCharge | undefined, selectedWattPort
  * Return: remaining hours
  **/
  calHoursOfCharging(person: any, selectedCar: any, availableCharge: number | undefined, selectedWattPort: any) {
    let remaininghrs = (80 - (availableCharge ? availableCharge : 0)) / selectedWattPort;
    this.sendAlertToPerson(person, selectedCar, " charging is in progress. Remaining hours : " + Math.round(remaininghrs));
    return remaininghrs;
  }

  /** Func: enableAllPorts
  * Desc: Enable all Ports during business hours
  * Params: None
  * Return: None
  **/
  enableAllPorts() {
    for (const station of this.chargingStationData) {
      station.isPort1Available = true;
      station.isPort2Available = true;
    }
  }

  /** Func: getCarDetailsById
  * Desc: Pass the car id and get the other details
  * Params: car id
  * Return: car details 
  **/
  getCarDetailsById(carId: number) {
    return this.cars.find((p) => p.carId === carId);
  }

  /** Func: updateCarStatus
  * Desc: During start charging and stop charging actions, update car details
  * Params: selectedCar, currentValue, status
  * Return: None
  **/
  updateCarStatus(selectedCar: any, currentValue: number, status: string) {
    this.cars.map((data) => {
      if (data.carId === selectedCar) {
        data.chargingStatus = status;
        data.availableCharge = currentValue;
      }
    })
  }

  /** Func: stopCharging
  * Desc: Stop charging and update car details
  * Params: selectedCar
  * Return: car details 
  **/
  stopCharging(selectedCar: any) {
    this.chargeStopMessage = "";
    let carDetail = this.getCarDetailsById(selectedCar);
    this.chargingStationData.map((data) => {
      if (carDetail?.carName === data.port1CarName) { //modal popup
        data.isPort1Available = true;
        data.port1Availablility = "Available";
        this.sendAlertToPerson(data.port1PersonName, carDetail.carName, ' charging in Port 1 is stopped');
        data.port1CarName = '';
        data.port1PersonName = '';
        data.port1RemainingHrs = 0;
      } else if (carDetail?.carName === data.port2CarName) {
        data.isPort2Available = true;
        data.port2Availablility = "Available";
        this.sendAlertToPerson(data.port2PersonName, carDetail.carName, ' charging in Port 2 is stopped');
        data.port2CarName = '';
        data.port2PersonName = '';
        data.port2RemainingHrs = 0;
      }
    })
    this.updateCarStatus(selectedCar, 80, "Completed");
    this.carsInQueue.push(this.getCarDetailsById(selectedCar));
    this.carsInUse = this.carsInUse.filter(car => car.carId != selectedCar);
    this.selectedCar = '';
  }

  /** Func: clearStationAndPort
  * Desc: Clear all selection like station, port, current battery value
  * Params: none
  * Return: none
  **/
  clearStationAndPort() {
    this.selectedStation = '';
    this.selectedWattPort1 = '';
    this.selectedWattPort2 = '';
    this.currentValue='';
  }
}
