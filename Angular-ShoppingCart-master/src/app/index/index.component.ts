import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  
  cartProducts: Product[];
  //showDataNotFound = true;
  
  options: any;
  modalRef: BsModalRef;

  config = {
    keyboard: true
  };
  constructor(
    private modalService: BsModalService,
    private productService: ProductService
    ) {}

  ngOnInit() {
    this.options = {
			
			autoplay: true,
			loop: true,
			autoplayTimeout: 1500,
			lazyLoad: true
    };
    this.getCartProduct();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  getCartProduct() {
		this.cartProducts = this.productService.getLocalCartProducts();
	}

}
