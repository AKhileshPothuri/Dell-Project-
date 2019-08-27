import { Component, OnInit, Inject } from "@angular/core";
import { UserService } from "./shared/services/user.service";
import { fadeAnimation } from "./shared/animations/fadeIntRoute";
import { HttpClient } from '@angular/common/http';

declare var $: any;

//declare var connection;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  
  public counter: number;
  title = "app";
  serverData: JSON;
  employeeData: JSON;

  constructor(
    private userService: UserService,
    private httpClient: HttpClient
    ) {
      this.counter = 0;
      //connection = this.httpClient.get('http://127.0.0.1:5002/');
    }

  ngOnInit() {
    $(document).ready(function() {
      $(".banner").owlCarousel({
        autoHeight: true,
        center: true,
        nav: true,
        items: 1,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
      });
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
    }
  }

  setGeoLocation(position: any) {
    this.userService.setLocation(
      position["coords"].latitude,
      position["coords"].longitude
    );
  }

  public clickCounterIncrement() : void {
    this.counter++;
    console.log(this.counter);
  }

  public getCounterValue(){
    return this.counter;
  }

  sayHi(){
    this.httpClient.get('http://127.0.0.1:5002/').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    })
  }

  getAllEmployees() {
    this.httpClient.get('http://127.0.0.1:5002/employees').subscribe(data => {
      this.employeeData = data as JSON;
      console.log(this.employeeData);
    })
  }

  
}
