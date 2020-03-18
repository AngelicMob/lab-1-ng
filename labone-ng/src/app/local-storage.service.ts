import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  traveler = {

    name: '',
    lastName: '',
    beverage: ''


  };

  travelerName: string;
  Object: string;
  purchase: boolean;

  checkIfUserExists() {

    if (localStorage.getItem('key') === null) {
      return 'hewo';

    } else {
      return 'sweetrolls';
    }
  }

  saveTravelerName(){
  }


}





