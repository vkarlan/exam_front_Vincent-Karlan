import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  name : string 
  email : string
  phone : string 
  address : string

  constructor(private data : ApiService) { }

  ngOnInit() {
  }

  adding(){
    this.data.AddUser( this.name, this.email, this.address, this.phone);
  }

}
