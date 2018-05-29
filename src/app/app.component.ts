import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

firstInputNumber: string;
secondInputNumber: string;
firstNumber: number;
secondNumber: number;
result: number;

onCalculateButtonClick () {
  this.typeReduction();
  this.result = (this.firstNumber) + (this.secondNumber);
  this.inputEraser();
}

typeReduction() {
  this.firstNumber = Number(this.firstInputNumber);
  this.secondNumber = Number(this.secondInputNumber);
}

inputEraser() {
  this.firstInputNumber = '';
  this.secondInputNumber = '';
}
}
