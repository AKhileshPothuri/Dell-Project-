import { Component, OnInit, Inject } from "@angular/core";
import { UserService } from "./shared/services/user.service";
import { fadeAnimation } from "./shared/animations/fadeIntRoute";
import { HttpClient } from '@angular/common/http';
import { stringify } from "@angular/compiler/src/util";

declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  
  public counter: number;
  private ratio;
  title = "app";
  serverData: JSON;
  employeeData: JSON;

  constructor(
    private userService: UserService,
    private httpClient: HttpClient
    ) {
      this.counter = 0;
      this.sendArguments(5,10);
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

  public setClickValueZero(){
    this.counter = 0;
  }


  sendArguments(clicks, uniqueProds){
    var client_id = `http://172.20.10.2:5000/api?arg1=${clicks}&arg2=${uniqueProds}`;
    var serverData;
    this.httpClient.get(client_id).subscribe(data => {
      serverData = data as JSON;
      this.ratio = serverData.r * 100;
    })
    return this.ratio;
  }
  
}
