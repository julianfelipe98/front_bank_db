import { Router } from '@angular/router';
import { AccountService } from './../../services/account.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-account',
  templateUrl: './form-account.component.html',
  styleUrls: ['./form-account.component.css']
})
export class FormAccountComponent implements OnInit {

  accountData = {
    customerId: "",
    accountType: "",
    coin: "",
    mode_of_use: ""
  }

  constructor(private accountService: AccountService, private router:Router) { }

  ngOnInit(): void {

  }

  createAccount(){
    console.log(this.accountData);
    this.accountService.sendCreateData(this.accountData)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/account/show');
    });
  }

}
