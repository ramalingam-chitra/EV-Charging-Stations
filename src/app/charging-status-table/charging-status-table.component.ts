import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Station } from '../model/charging-model';

@Component({
  selector: 'app-charging-status-table',
  templateUrl: './charging-status-table.component.html',
  styleUrls: ['./charging-status-table.component.scss'],
})
export class ChargingStatusTableComponent implements OnInit {
  
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
        header: 'Station'
      },
      {
        key: 'port1Availablility',
        header: 'Port 1'
      },
      {
        key: 'port1CarName',
        header: 'Car'
      },
      {
        key: 'port1PersonName',
        header: 'Person'
      },
      {
        key: 'port2Availablility',
        header: 'Port 2'
      },
      {
        key: 'port2CarName',
        header: 'Car'
      },
      {
        key: 'port2PersonName',
        header: 'Person'
      },
    ];

    this.displayedColumnsKeys = this.displayedColumns.map(col => col.key);
    this.dataSource = new MatTableDataSource(this.inputData);
  }
}
