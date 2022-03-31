import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  customerForm!: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private router:Router) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      id: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      documentType: new FormControl('', [Validators.required]),
      nationality: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      houseNumber: new FormControl('', [Validators.required]),
      neighboorhood: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required])
    })
  }

  sendDataCustomer(){
    console.log("Entrando...");

    console.log(this.customerForm.value);
    this.customerService.createCustomer(this.customerForm.value)
    .subscribe((res):any => {
      console.log(res);
      this.router.navigateByUrl('/customer/show');
    })
  }

}
