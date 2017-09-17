import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ApiService } from './api.service';
import { AppComponent } from './app.component';
 
import { RouterModule } from '@angular/router';
import { RouteComponent } from './route/route.component';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, 
       RouterModule.forRoot([
      { path : '', component : RouteComponent },
      { path : 'mycomponent', component : MyComponentComponent }
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
