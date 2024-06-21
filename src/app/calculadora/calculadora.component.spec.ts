import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test que comprrueba que los valores iniciales de los datos numericos son 0
  it('should initialize numbers and results at 0', () => {
    expect(component.number1).toBe(0)
    expect(component.number2).toBe(0)
    expect(component.result).toBe(0)
  })

  // Como nuestra calculadora no muestra como tal los numeros en el html, comprobamos que el display inicial sea 0
  it('should display initian result as 0', () => {
    const compiled = fixture.nativeElement;
    const resultElement = compiled.querySelector('.display') //seleccionamos la clase del elemento a testear

    expect(resultElement.textContent).toContain('0')
  })
});
