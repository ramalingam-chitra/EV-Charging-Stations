import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Station } from '../model/charging-model';

@Component({
  selector: 'app-simple-mat-table',
  templateUrl: './simple-mat-table.component.html',
  styleUrls: ['./simple-mat-table.component.scss'],
})
export class SimpleMatTableComponent implements OnInit {
  
  displayedColumns: Array<any> | undefined;
  displayedColumnsKeys: string[] | undefined;
  StationData: Station[] = [
    {
      stationId: 0,
      stationName: 'Station 1',
      isPort1Available: false,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: false,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
    },
    {
      stationId: 1,
      stationName: 'Station 2',
      isPort1Available: false,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: false,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
    },
    {
      stationId: 2,
      stationName: 'Station 3',
      isPort1Available: true,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: true,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
    },
    {
      stationId: 3,
      stationName: 'Station 4',
      isPort1Available: true,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: true,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
    },
    {
      stationId: 4,
      stationName: 'Station 5',
      isPort1Available: true,
      selectedWattsForPort1Value: 3.2,
      isPort1Disabled: false,
      isPort2Available: true,
      selectedWattsForPort2Value: 3.2,
      isPort2Disabled: false,
    },
  ];
  dataSource!: MatTableDataSource<Station>;

  constructor() {}

  ngAfterViewInit() {}

  ngOnInit(): void {
    this.displayedColumns= [
      {
        key: 'stationName',
        header: 'Station Name'
      },
      {
        key: 'isPort1Available',
        header: 'Port 1'
      },
      {
        key: 'isPort2Available',
        header: 'Port 2'
      }
    ];

    this.displayedColumnsKeys = this.displayedColumns.map(col => col.key);
    this.dataSource = new MatTableDataSource(this.StationData);

  }
}
