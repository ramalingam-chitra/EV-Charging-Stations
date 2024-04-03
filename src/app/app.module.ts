import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChargingStatusTableComponent } from './charging-status-table/charging-status-table.component';
import { ChargingManagementComponent } from './charging-management/charging-management.component';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, ChargingStatusTableComponent, ChargingManagementComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialComponentsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
