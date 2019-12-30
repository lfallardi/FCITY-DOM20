import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ModalConfirmComponent } from '../../common/modal-confirm/modal-confirm.component';
import { ModalConfig } from '../../common/modal-confirm/model/ModalConfig';
import { CustomValidators, errorMessages } from '../model/customValidators';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// services
import { ModalService } from '../../../services/modal.service';
import { SpinnerService } from '../../../services/spinner.service';
import { AlertService } from '../../../services/alert.service';
import { CuposDetail } from '../model/CuposDetail';
import { ParameterService } from 'src/services/Parameter.service';

@Component({
  selector: 'app-editCupoBase',
  templateUrl: './editCupoBase.component.html',
  styleUrls: ['./editCupoBase.component.css']
})
export class EditCupoBaseComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public cupoDet: CuposDetail,
              private modalService: ModalService, private spinnerService: SpinnerService,
              private alertService: AlertService, private fb: FormBuilder,
              public parameterService: ParameterService) {
    this.setForm();
  }

  spinnerMessage: 'Editando cupos...';
  errors = errorMessages;
  updateCuposForm: FormGroup;
  public onUpdateComplete = new EventEmitter();

  ngOnInit() {
  }

  setForm() {
    this.updateCuposForm = this.fb.group({
      cupos: [this.cupoDet.cupos, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
      porcDeshabilita: [this.cupoDet.porcDeshabilita, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
    });
  }

  setUpdateCupos() {
    if (this.updateCuposForm.valid) {
      let dialogRef;

      dialogRef = this.modalService.open(ModalConfirmComponent, {
        width: '750px',
        data: this.configModalConfirm(),
        autoFocus: false
      });

      dialogRef.componentInstance.onConfirm.subscribe(() => {
        this.spinnerService.show();
        this.spinnerService.hide();
        this.alertService.success('Se actualizaron los datos de forma exitosa!');
        this.onUpdateComplete.emit();
      });

    }
  }

  configModalConfirm(): ModalConfig {
    const modalConfig = new ModalConfig();
    modalConfig.btnLabel = 'Aceptar';
    modalConfig.message = '¿Está seguro que desea confirmar los cambios?';
    modalConfig.tittle = 'Confirmar edición';
    modalConfig.showCancelButton = true;
    modalConfig.showCrossButton = true;
    return modalConfig;
  }

}
