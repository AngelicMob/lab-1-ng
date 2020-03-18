import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {

  usualBeverage: string;
  usualChoice: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  theUsual() {

  }
}
