import { Http } from "@angular/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";



@Injectable()
export class ApiService {

   id : number;
  name : string = "name";
  email : string = "email";
  address : string = "address";
  phone : string = "phone";
  
  UserList : object[] = [];

  constructor(private http:Http) {

    // GET
    
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(
      result => {
      result.json().forEach(user => {
        this.UserList.push({
        "id" : user.id,
        "name" : user.name,
        "email" : user.email,
        "address" : user.address.street + ' ' + user.address.city + ' ' + user.address.state + ' '+ user.address.zipcode,
        "phone" : user.phone,
        });
   
      });[0];

      //var obj : object;
      /*
      if (this.UserList.length != 0) {
        var lastId = this.UserList[this.UserList.length - 1]["id"]+1;
        obj = { "id" : lastId + 1 };
      }
      else {
        obj = { "id" : 1};
      }
      */
      
      console.log(this.UserList);
      },

      error => { 
        console.log(error);
      }
    )
   }
  
  AddUser (name, email, address, phone) : void {

      var id = this.UserList[this.UserList.length - 1]["id"]+1;
      var obj = { "id" : id,  "name" : name, "email" : email,  "address": address, "phone": phone};
      this.UserList.push(obj);

      console.log(this.UserList);
    } 

  DeleteToDo(id) : void {

    for (var i = 0; i < this.UserList.length; i++) {
      if (this.UserList[i]["id"] == id) {
        this.UserList.splice(i, 1);
        break;
      }
    }
    console.log(this.UserList);
    //this.UserList[index]["deleted"] = true;
    //this.UserList.splice(index, 1);
  }

  

}