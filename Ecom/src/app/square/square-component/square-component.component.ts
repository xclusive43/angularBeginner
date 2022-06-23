import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-square-component',
  templateUrl: './square-component.component.html',
  styleUrls: ['./square-component.component.css']
})
export class SquareComponentComponent implements OnInit {

  day: any
  hh = 0;
  mm = 0;
  ss = 0;
  // for digital clock variable
  dh: any;
  dm: any;
  ds: any;
  am: any;
  constructor() { }
  ngOnInit(): void {
    setInterval(() => {
      this.day = new Date();
      this.hh = this.day.getHours() * 30 + Math.round(this.mm / 12);
      this.mm = this.day.getMinutes() * 6;
      this.ss = this.day.getSeconds() * 6;

      // for digital clock
      this.dh = new Date().getHours();
      this.dm = new Date().getMinutes();
      this.ds = new Date().getSeconds();
      // for am and pm
      this.am = this.dh >= 12 ? "PM" : "AM";
      // convert 24hrs to 12hrs
      if (this.dh > 12) {
        this.dh = this.dh - 12;
      }

      this.dh = (this.dh <10) ? "0" +this.dh : this.dh;
      this.dm = (this.dm <10) ? "0" +this.dm : this.dm;
      this.ds = (this.ds <10) ? "0" +this.ds : this.ds;
    }, 1000)
  }


}
