import { Component } from '@angular/core';

import { HEROES } from './hero';
import { AfterViewInit,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <app-hero-child *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master">
    </app-hero-child>
    <button (click)="changeMaster()">Change values</button>
  `
})
export class HeroParentComponent implements  AfterViewChecked, AfterViewInit {
  ngAfterViewInit(): void {
   console.log('Child View Intialized : ngAfterViewInit')
  }
  ngAfterViewChecked(){
    console.log('Child View Intialized : ngAfterViewChecked')
  }
  heroes = HEROES;
  master = 'Master';
  changeMaster(){
    this.master = "New Master";
  }

  
}
