import { Component, ViewChild } from '@angular/core';
import { Employee, Service } from './app.service';
import {
  DxDataGridComponent
} from "devextreme-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service]
})

export class AppComponent {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  dataSource: Employee[];

  constructor(service: Service) {
    this.dataSource = service.getEmployees();
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.dataGrid.instance.exportToExcel(false);
  }
}
