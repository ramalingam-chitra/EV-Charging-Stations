import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  selected = 3.2;
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

  chargingStations = [
    {
      stationId: 0,
      stationName: 'Station1',
      isPort1Available: true,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: true,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
    },
    {
      stationId: 1,
      stationName: 'Station2',
      isPort1Available: true,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: true,
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

  ngOnInit() {
    console.log('charging stations detail : ', this.chargingStations);
    console.log('car detail : ', this.cars);
  }

  ngDoCheck() {}
  changeWatts(event, station, port) {
    debugger;
    if (event.target.value == "22") {
      if(port == 1) {
      this.chargingStations[station].isPort2Disabled = true;
      } else {
        this.chargingStations[station].isPort1Disabled = true;
      }
    }
    console.log('selected value', event.target.value);
    //this.selected = event.target.value;
  }
  checkAvailableChargingStations() {
    
  }
}
