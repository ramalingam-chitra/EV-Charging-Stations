import { Component, Input, OnInit } from '@angular/core';
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
  @Input()
  inputData!: Station[];
  dataSource!: MatTableDataSource<Station>;

  constructor() {}

  ngAfterViewInit() {}

  ngOnInit(): void {
    console.log(" dataSource ", this.inputData)
    this.displayedColumns= [
      {
        key: 'stationName',
        header: 'Station Name'
      },
      {
        key: 'port1Availablility',
        header: 'Port 1 Availability'
      },
      {
        key: 'port1CarName',
        header: 'Car in Port 1'
      },
      {
        key: 'port1PersonName',
        header: 'Person in charge - Port 1'
      },
      {
        key: 'port2Availablility',
        header: 'Port 2 Availability'
      },
      {
        key: 'port2CarName',
        header: 'Car in Port 2'
      },
      {
        key: 'port2PersonName',
        header: 'Person in charge - Port 2'
      },
    ];

    this.displayedColumnsKeys = this.displayedColumns.map(col => col.key);
    this.dataSource = new MatTableDataSource(this.inputData);
  }
}
