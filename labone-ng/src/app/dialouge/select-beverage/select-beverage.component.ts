import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {

  beverageMeal: string;
  bevMealSelected: boolean;

constructor() {}

ngOnInit(): void {
  }


  Order(order: string) {
    console.log(order);
  }
}
