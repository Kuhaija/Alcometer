import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  genders = [];
  times = [];
  bottles = [];
  weight: number;
  gender: string;
  timeamount :number;
  bottleamount: number;
  promilles: number;

  constructor() {}

  ngOnInit() {
    this.genders.push('Male');
    this.genders.push('Female');
  
    
    for (let i = 1; i < 25; i++){
      this.times.push(i);
    }
    
    for (let j = 1; j < 25; j++){
      this.bottles.push(j);
    }
    
    this.gender = 'Male';
    this.timeamount = 1;
    this.bottleamount = 1;
  }
  
  calculate() {

      const litres = this.bottleamount * 0.33;
      const grams = litres * 8 * 4.5;
      const burning = this.weight / 10;
      const gramsleft = grams - (burning * this.timeamount);
      
  
      
      
      if (this.gender === 'Male') {
        this.promilles = gramsleft /(this.weight*0.7);
      } else {
        this.promilles = gramsleft /(this.weight*0.6);
      }
    }
  } 
