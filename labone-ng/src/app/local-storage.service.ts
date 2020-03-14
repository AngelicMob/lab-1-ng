import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  traveler = { /*information of the user */

    name: '',
    lastName: '',
    beverage: ''


  };

  travelerName: string;
  Object: string;
  purchase: boolean;

  checkUserExistence(){

  }
}





