import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    CommonModule,
    MatSelectModule,
    MatDividerModule,
    MatInputModule
  ],
  exports:[
    MatTableModule,
    MatSelectModule,
  ]
})
export class MaterialComponentsModule { }
