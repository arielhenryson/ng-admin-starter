import { NgModule } from '@angular/core'


import { TableComponent } from './table.component'
import { MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: []
})
export class TableModule {}
