import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-dialouge',
  templateUrl: './dialouge.component.html',
  styleUrls: ['./dialouge.component.css']

})
export class DialougeComponent implements OnInit {

@ViewChild('inputBoxSection') inputBoxSectionPart: ElementRef;

NewTraveler;
traveler: string;
travelerSignedUp: boolean = false;
beverageMeal: string;
usualBevMealChoice: boolean = false;
usualBevMeal: string;
chosen: boolean = false;

  constructor(private renderer: Renderer2, private localstorage: LocalStorageService) { }

  ngOnInit(): void {

    this.NewTraveler = this.localstorage.checkIfTravelerExists();

    if (this.NewTraveler === false) {

      this.traveler = this.localstorage.getTravelerName();

    }

}


  submit(name: string, lastName: string) {

   if (lastName === '') {

    console.log('Provide a Last name please')

    } else {

    this.localstorage.registerTraveler();
    this.travelerSignedUp = true;
    this.inputBoxSectionPart.nativeElement.remove();
   }
  }

 getBevMeal(beverageMeal: string) {

  this.beverageMeal = this.beverageMeal;
  this.chosen = true;
 }

 getUsualOrder(usuals: string) {

  this.usualBevMeal = usuals;
  this.usualBevMealChoice = true;
 }

 deleteTraveler() {

  this.localstorage.signOutTraveler();
}

}
