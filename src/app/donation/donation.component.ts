import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent {
  amountDonated: Number = 0;

  public formMakeADonation: FormGroup = new FormGroup({
    'amount': new FormControl('', [Validators.required, Validators.min(0)]),
  });

  constructor() { }
}
