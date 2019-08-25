import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  options: any;
  constructor() {}

  ngOnInit() {
    this.options = {
			
			autoplay: true,
			loop: true,
			autoplayTimeout: 1500,
			lazyLoad: true
		};
  }
}
