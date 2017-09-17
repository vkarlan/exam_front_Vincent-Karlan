import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor(private data : ApiService) { }

  ngOnInit() {
  }

  deleting(id)
  {
    this.data.DeleteToDo(id);
  }
}
