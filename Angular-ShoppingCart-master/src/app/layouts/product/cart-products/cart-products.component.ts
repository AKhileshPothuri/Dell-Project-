import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../shared/services/product.service';

var modalTemplate;

@Component({
	selector: 'app-cart-products',
	templateUrl: './cart-products.component.html',
	styleUrls: [ './cart-products.component.scss' ]
})
export class CartProductsComponent implements OnInit {
	cartProducts: Product[];
	showDataNotFound = true;

	options: any;
	modalRef: BsModalRef;

	config = {
		keyboard: true
	};

	// Not Found Message
	messageTitle = 'No Products Found in Cart';
	messageDescription = 'Please, Add Products to Cart';

	constructor(
		private modalService: BsModalService,
		private productService: ProductService
		) {
			//modalTemplate = document.getElementById("ngModalTemplate")
			//this.openModal(modalTemplate);
		}

	ngOnInit() {
		this.getCartProduct();
	}

	removeCartProduct(product: Product) {
		this.productService.removeLocalCartProduct(product);
		// Recalling
		this.getCartProduct();
	}

	emptyCartProduct(){
		// Not used
		this.productService.emptyLocalCart();
		this.getCartProduct();
	}


	getCartProduct() {
		this.cartProducts = this.productService.getLocalCartProducts();
	}

	openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template, this.config);
	}


}
