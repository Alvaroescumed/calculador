import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  number1: number = 0
  number2: number = 0
  action: string| any 
  result: number = 0
  display= '0'

  //creamos una funcion en la que tras clicar uno de los botones en el html lo introduce en el display, si el primer nuemero es 0 se reemplaza por este
  numClick(value: number){
    if(this.display === '0'){
      this.display = `${value}`
    }else{
    this.display = `${this.display}${value}`
    }
  }

  // creamos la funcion en la que tras clicar la operacion a realizar, guardamos en el numero1(el valor del display) y la accion a realizar
  operate(action: string){
    this.number1 = parseFloat(this.display) //parseamos el string
    this.action = action
    this.display = '0' //reseteamos el display para que se introduzca el segundo numero a operar
  }
  // creamos la funcion que calculara las operaciones 
  calculate(){

    //guardamos como numero2 el numero del display
    this.number2 = parseFloat(this.display)

    if(this.action === 'addition'){
      this.result = this.number1 + this.number2
    }
    else  if(this.action === 'subtraction'){
      this.result = this.number1 - this.number2
    }
    else  if(this.action === 'multiply'){
      this.result = this.number1 * this.number2
    }

    this.display = this.result.toString() // convertimos el resultado de las operaciones a string
  }

  // creamos una funcion para resetear la calculadora
  clear(){ 
    this.display = '0'
    this.number1 = 0
    this.number2 = 0
  }
}
