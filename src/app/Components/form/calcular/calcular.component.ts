import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment';
import 'moment/locale/es'; // without this line it didn't work
moment.locale('es');
import { AlertsService } from 'src/app/services/alerts.service';
import { RegistrarService } from 'src/app/services/registrar.service';

import { MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { ConfigDataPickerService } from 'src/app/services/config-data-picker.service';
import { HoursWorked, HoursWorkedIInit } from 'src/app/models/hoursWorked';
import { Person, personInit } from 'src/app/models/person';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css'],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: ConfigDataPickerService,
    },
  ],
})
export class CalcularComponent implements OnInit {
  
  // minDate: string = '';
  // maxDate: string = '';

  public form: FormGroup;

  public resultCalculate: HoursWorked = { ...HoursWorkedIInit };
  public person: Person = { ...personInit };

  public totalHours: number = 0;
  public showResult: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: RegistrarService,
    private alerts: AlertsService
  ) {
    this.form = this.fb.group({
      typeFilter: ['Technical', [Validators.required]],
      identification: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  //   this.minDate = moment().subtract(6, 'days').format('YYYY-MM-DDTHH:mm:ss');
  //   this.maxDate = moment().format('YYYY-MM-DDTHH:mm:ss');
  }

  enviar(): any {
    if (this.form.valid) {
      const { typeFilter, identification, startDate, endDate } =
        this.form.value;

      const sendData = {
        typeFilter,
        identification,
        startDate: moment(startDate).format('YYYY-MM-DDTHH:mm:ss.'),
        endDate: moment(endDate)
          .add(23, 'h')
          .add(59, 'm')
          .add(59, 's')
          .format('YYYY-MM-DDTHH:mm:ss.'),
      };

      this.service.getCalculateHours(sendData).subscribe({
        next: (response: any) => {
          this.alerts.messageOk(response.message);
          const { hoursWorked, person } = JSON.parse(response.body);
          this.resultCalculate = hoursWorked;
          if(person) this.person = person;
          this.getTotalHours();
          this.showResult = true;
        },
        error: ({ error }) => this.alerts.messageError(error.message),
        complete: () => {
          this.resetForm();
        },
      });
    }
  }

  getTotalHours() {
    const {
      Sundays,
      nightExtras,
      nocturnal,
      normal,
      normalExtras,
      sundayExtras,
    } = this.resultCalculate;
    this.totalHours =
      Sundays + nightExtras + normalExtras + nocturnal + normal + sundayExtras;
  }

  resetAll() {
    this.showResult = false;
    this.resetForm();
  }
  resetForm() {
    this.form.reset();
    this.form.get('typeFilter')?.setValue('Technical');
  }
}
