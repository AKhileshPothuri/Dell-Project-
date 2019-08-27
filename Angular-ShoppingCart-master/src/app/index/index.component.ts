import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  options: any;
  modalRef: BsModalRef;
  config = {
    keyboard: true
  };
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.options = {
			
			autoplay: true,
			loop: true,
			autoplayTimeout: 1500,
			lazyLoad: true
		};
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

}
