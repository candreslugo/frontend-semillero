import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { RegistrarComponent } from './registrar.component';
import { Component } from '@angular/core';

describe('RegistrarComponent', () => {
  let component: RegistrarComponent;
  let fixture: ComponentFixture<RegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarComponent ],
      imports:[ReactiveFormsModule,MatSnackBarModule,HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Pruebas Unitarias DOM
  it("se debe crear el componente registrar",()=>{
  const fixture = TestBed.createComponent(RegistrarComponent);
  expect(fixture.componentInstance).toBeTruthy();
  });

  it("debe renderizar horas y servicios",()=>{
  const fixture = TestBed.createComponent(RegistrarComponent);
  fixture.detectChanges();
  const compiled: HTMLElement = fixture.nativeElement;
  expect(compiled.querySelector("h2")?.textContent).toEqual("Registro de horas trabajadas");
  })
  it("debe renderizar Identificacion del Tecnico",()=>{
  const fixture = TestBed.createComponent(RegistrarComponent);
  fixture.detectChanges();
  const compiled: HTMLElement = fixture.nativeElement;
  expect(compiled.querySelector(".labelTecnico")?.textContent).toEqual("Identificacion del Tecnico");
  })

  it("debe renderizar Fecha Inicio",()=>{
  const fixture = TestBed.createComponent(RegistrarComponent);
  fixture.detectChanges();
  const compiled: HTMLElement = fixture.nativeElement;
  expect(compiled.querySelector(".labelFechaInicio")?.textContent).toEqual("Fecha Inicio");
  })

  it("debe renderizar Fecha Fin",()=>{
  const fixture = TestBed.createComponent(RegistrarComponent);
  fixture.detectChanges();
  const compiled: HTMLElement = fixture.nativeElement;
  expect(compiled.querySelector(".labelFechaFin")?.textContent).toEqual("Fecha Fin");
  })
  // Pruebas de integracion
  



});

