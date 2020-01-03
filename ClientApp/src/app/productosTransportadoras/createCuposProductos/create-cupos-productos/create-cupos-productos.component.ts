import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';
import { ModalConfirmComponent } from '../../../common/modal-confirm/modal-confirm.component';
import { ModalConfig } from '../../../common/modal-confirm/model/ModalConfig';
import { CustomValidators, errorMessages } from '../../model/customValidators';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// services
import { ModalService } from '../../../../services/modal.service';
import { SpinnerService } from '../../../../services/spinner.service';
import { AlertService } from '../../../../services/alert.service';
import { ParameterService } from '../../../../services/Parameter.service';
import { CuposProductosDetail } from '../../model/CuposProductosDetail';
import { disableDebugTools } from '@angular/platform-browser';


export interface Prioridad {
  value: string;
  viewValue: string;
}

export interface CuposBases {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-create-cupos-productos',
  templateUrl: './create-cupos-productos.component.html',
  styleUrls: ['./create-cupos-productos.component.css']
})
export class CreateCuposProductosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public CupoProductoDet: CuposProductosDetail,
              private modalService: ModalService, private spinnerService: SpinnerService,
              private alertService: AlertService, private fb: FormBuilder, public parameterSerice: ParameterService) {
                this.setForm();
              }

  spinnerMessage: 'Creado cupo producto...';
  errors = errorMessages;
  createCuposProductosForm: FormGroup;
  public onCreateCuposProductos = new EventEmitter();

  Prioridades: Prioridad[] = [
    {value: 'A', viewValue: 'Alta'},
    {value: 'N', viewValue: 'Normal'},
    {value: 'B', viewValue: 'Baja'},
    {value: 'NA', viewValue: 'No aplica'}
  ];

  // cambiar para que se obtenga desde una api o microservicio
  cmbCuposBases: CuposBases[] = [
    {value: 1, viewValue: 'Lunes'},
    {value: 2, viewValue: 'Martes'},
    {value: 3, viewValue: 'Miercoles'},
    {value: 4, viewValue: 'Jueves'},
    {value: 5, viewValue: 'Viernes'},
    {value: 6, viewValue: 'Sabado'},
    {value: 7, viewValue: 'Domingo'}
  ];

  ngOnInit() {
  }

  setForm() {
    this.createCuposProductosForm = this.fb.group({
      nombreProducto: '',
      Prioridad: '',
      CupoBase: '',
      horaTope: '',
      cantCupos: {value: '', disabled: true},
      porcDeshabilita: {value: '', disabled: true},
      cupoMinimo: {value: '', disabled: true},
      checkActivo: true,
      checkDom: true,
      checkExcepcion: false,
      // Excepcion
      Excepcion: '',
      // FechaIni: '',
      // FechaFin: '',
      horaTopeExcepcion: '',
      // transportadora
      nombreTransportadora: '',
      horasPrevias: '',
      checkActivoTransportadora: true
    });
  }

}
