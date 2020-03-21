import { Injectable, EventEmitter } from '@angular/core';
import { SelectBeverageComponent } from './dialouge/select-beverage/select-beverage.component';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  traveler = {

    name: '',
    lastName: '',
    beverageMeal: '',


  };

  travelerName: string;
  Object: string;
  purchase: boolean;


checkIfTravelerExists() {

  if (localStorage.getItem('key') === null) {

    return localStorage.getItem('1');

    } else {

      return console.log('No traveler yet');

  }
}

registerTraveler() {
    this.travelerName = this.traveler.lastName;
    this.traveler.name = name;

    localStorage.setItem('1',  this.travelerName);
    }



getTravelerName() {

    const returntraveler = localStorage.getItem('1');
    this.traveler = JSON.parse(returntraveler);

    return this.traveler.lastName;

}

orderBevMeal(bevMeal: string) {


  this.traveler.beverageMeal = bevMeal;
  const strings = JSON.stringify(this.traveler);
  localStorage.setItem('1', strings);


}


signOutTraveler() {

  localStorage.clear();
  location.reload();

}



}





