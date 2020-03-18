import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-dialouge',
  templateUrl: './dialouge.component.html',
  styleUrls: ['./dialouge.component.css']

})
export class DialougeComponent implements OnInit {


  constructor(private localstorage: LocalStorageService) { }

  ngOnInit(): void {


  }

}
