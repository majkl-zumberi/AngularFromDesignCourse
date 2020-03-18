import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  dataFromApi:Object;

  //use construtor for only inject a dependency
  constructor(private _http:HttpService) { }

  //ngOnInit runs when the component is loaded 
  ngOnInit(): void {
    this._http.getDataFromApi().subscribe(data=>{
      this.dataFromApi=data;
      console.log(this.dataFromApi);
    });
  }

}
