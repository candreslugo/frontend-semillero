import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastService } from 'angular-toastify';

import * as moment from 'moment';
import { catchError, tap } from 'rxjs';
import { AlertsService } from 'src/app/services/alerts.service';
import { RegistrarService } from 'src/app/services/registrar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  myImage: string = '../assets/resources/HANDYMAN.png';
  minDate: string = '';
  maxDate: string = '';

  public form: FormGroup;

  registrar: any = {};

  constructor(
    private fb: FormBuilder,
    private service: RegistrarService,
    private alerts: AlertsService
  ) {
    this.form = this.fb.group({
      idTecnico: ['', [Validators.required]],
      idServicio: ['', [Validators.required]],
      fechaI: ['', [Validators.required]],
      fechaF: [{ value: '', disabled: true }, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.minDate = moment().subtract(6, 'days').format('YYYY-MM-DDThh:mm');
    this.maxDate = moment().format('YYYY-MM-DDThh:mm');
  }

  onChange() {
    if (!this.form.value.fechaI.empty) {
      this.form.get('fechaF')?.enable();
    }
  }

  enviar(): any {
    const idTecnico = this.form.value.idTecnico;
    const idServicio = this.form.value.idServicio;
    const fechaI = this.form.value.fechaI;
    const fechaF = this.form.value.fechaF;

    const Datos = {
      id: 1,
      document: idTecnico,
      requestId: idServicio,
      startDate: fechaI,
      endDate: fechaF,
    };
    this.service.getRegistro(Datos).subscribe({
      next: (response) => this.alerts.messageOk(response.message),
      error: ({error}) => this.alerts.messageError(error.message),
      complete: () => this.form.reset(),
    });
  }
}
