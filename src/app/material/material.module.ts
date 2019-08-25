import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatIconModule, MatButtonModule, MatSidenavModule, MatDividerModule, MatToolbarModule, MatMenuModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports:[
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
