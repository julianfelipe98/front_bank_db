import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {


  onClickRegister() {
    console.log('click register');
    console.log(this.router.url);
    if (this.router.url.includes('customer')) {
      console.log('customer register');
      this.router.navigate(['customer/register']);
    }
    if (this.router.url.includes('account')) {
      console.log('account register');
      this.router.navigateByUrl('account/register');
    }
    if (this.router.url.includes('transfer')) {
      console.log('transfer register');
      this.router.navigateByUrl('account/show');
    }
  }
  onClickUpdate() {
    console.log(this.router);
  }
  onClickShow() {
    console.log('click show');
    console.log(this.router.url);
    if (this.router.url.includes('customer')) {
      console.log('customer show');
      this.router.navigate(['customer/show']);
    }
    if (this.router.url.includes('account')) {
      console.log('account show');
      this.router.navigateByUrl('account/show');
    }
    if (this.router.url.includes('transfer')) {
      console.log('transfer show');
      this.router.navigateByUrl('transfer/show');
    }
  }
  constructor(private router: Router) {
  }

  ngOnInit(): void {}
}
