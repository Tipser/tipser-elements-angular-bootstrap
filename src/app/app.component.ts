import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tipser-elements-angular-bootstrap';
  currentStep = '';
  didFillDetails = false;
  didFillPaymentDetails = false;
  setStep(value: string): void {
    this.currentStep = value;
  }

  purchase(): void {
    console.log('purchase');
  }
}
