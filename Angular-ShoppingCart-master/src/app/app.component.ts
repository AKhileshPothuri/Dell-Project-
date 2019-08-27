import { Component, OnInit, Inject } from "@angular/core";
import { UserService } from "./shared/services/user.service";
import { fadeAnimation } from "./shared/animations/fadeIntRoute";
//import { counterComponent } from "./index/navbar/counter";

declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  
  public counter: number;
  title = "app";

  constructor(
    private userService: UserService,
    ) {
      this.counter = 0;
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

  
}
