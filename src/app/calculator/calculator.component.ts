import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  bill: number = 0;
  tip: number = 0;
  numberOfPeople: number = 0;

  tipPerson: number = 0;
  tipTotal: number = 0;

  calculateTipPerson() {

    let tip = (this.bill * (this.tip / 100) ) / this.numberOfPeople;
    if (isNaN(tip) || tip === Number.POSITIVE_INFINITY || tip === Number.NEGATIVE_INFINITY) {
      return 0;
    }else {
      return tip;
    }
  }

  calculateTotal() {
    let total = (this.bill / this.numberOfPeople) + this.calculateTipPerson();

    if (isNaN(total) || total === Number.POSITIVE_INFINITY || total === Number.NEGATIVE_INFINITY) {
      return 0;
    }else {
      return total;
    }

  }


  reset(billInput: HTMLInputElement, custom: HTMLInputElement, numberofpeople: HTMLInputElement) {
    this.bill = 0;
    billInput.value = '';
    this.tip = 0;
    custom.value = '';
    this.numberOfPeople = 0;
    numberofpeople.value = '';
  }

  setTip(number: number, custom: HTMLInputElement) {
    this.tip = number;
    custom.value = '';
  }
}
