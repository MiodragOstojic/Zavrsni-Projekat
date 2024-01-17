import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'

})
export class HomeComponent implements OnInit {
  constructor(
    public router: Router) {
  }

  ngOnInit(): void {

  }
  loadShop() {
    this.router.navigate(['/shop']);
  }
}
