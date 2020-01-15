import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SynchronizationService } from '../../services/synchronization.service';
import { ModalService } from '../../services/modal.service';
import { EditCupoBaseComponent } from './editCupoBase/editCupoBase.component';
import { Cupos } from 'src/model/cupos';

export interface dCupos {
  IdECCupoBase: number;
  day: number;
  cupos: number;
  porcDeshabilita: number;
}

// Hay que adaptarlo para que tome los datos de la base de datos
const ELEMENT_DATA: dCupos[] = [
  {IdECCupoBase: 1, day: 1, cupos: 400, porcDeshabilita: 80},
  {IdECCupoBase: 2, day: 2, cupos: 400, porcDeshabilita: 80},
  {IdECCupoBase: 3, day: 3, cupos: 400, porcDeshabilita: 80},
  {IdECCupoBase: 4, day: 4, cupos: 400, porcDeshabilita: 80},
  {IdECCupoBase: 5, day: 5, cupos: 400, porcDeshabilita: 80},
  {IdECCupoBase: 6, day: 6, cupos: 400, porcDeshabilita: 80},
  {IdECCupoBase: 7, day: 7, cupos: 400, porcDeshabilita: 80}
];

@Component({
  selector: 'app-cupos',
  templateUrl: './cupos.component.html',
  styleUrls: ['./cupos.component.css']
})

export class CuposComponent implements OnInit {
  displayedColumns: string[] = ['position', 'day', 'cupos', 'porcDeshabilita', 'edition'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  synchronizationDate: string;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private synchronizationService: SynchronizationService, private modalService: ModalService) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    // this.updateSyncroInformation();
  }

  private updateSyncroInformation() {
    this.synchronizationService.getLastDateOfSynchronization().subscribe(
      response => {
        this.synchronizationDate = response.date;
      },
      errorResponse => {
        this.synchronizationDate = '';
      });
  }

  editCupoBase(cupo: Cupos): void {
    let dialogRef;
    dialogRef = this.modalService.open(EditCupoBaseComponent, {
      width: '800px',
      data: cupo,
      autoFocus: false
    });

    dialogRef.componentInstance.onEditComplete.subscribe(() => {
      this.modalService.closeAll();
      // this.initData();
    });

  }

}
