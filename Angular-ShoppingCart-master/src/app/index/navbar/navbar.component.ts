import { Component, OnInit, TemplateRef, VERSION } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth.service";
import { ProductService } from "../../shared/services/product.service";
import { TranslateService } from "../../shared/services/translate.service";
import { ThemeService } from "src/app/shared/services/theme.service";
import { AppComponent } from "src/app/app.component";
import { Product } from 'src/app/shared/models/product';
declare var $: any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {

  angularVersion = VERSION;
  
  cartProducts: Product[];
  options: any;

  modalRef: BsModalRef;
  ratio: number;

  config = {
    keyboard: true
  };

  constructor(
    private modalService: BsModalService,
    public authService: AuthService,
    private router: Router,
    public productService: ProductService,
    public translate: TranslateService,
    private themeService: ThemeService,
    private appcomp: AppComponent
  ) {

  }

  ngOnInit() { 
    this.options = {
			autoplay: true,
			loop: true,
			autoplayTimeout: 1500,
			lazyLoad: true
    };
    this.getCartProduct();
  }

  logout(template: TemplateRef<any>) {
    //this.openModal(template);
    this.authService.logout();
    this.productService.emptyLocalCart();
    this.productService.emptylocalFavs();
    this.appcomp.setClickValueZero();
    this.router.navigate(["/"]);
    
  }

  setLang(lang: string) {
    this.translate.use(lang).then(() => { });
  }

  updateTheme(theme: string) {
    this.themeService.updateThemeUrl(theme);
  }

  openModal(template: TemplateRef<any>) {
    this.cartProducts = this.productService.getLocalCartProducts();
    this.modalRef = this.modalService.show(template, this.config);
  }

  getCartProduct() {
		this.cartProducts = this.productService.getLocalCartProducts();
	}

  sendTrigger(template: TemplateRef<any>){
    var clicks = this.appcomp.getCounterValue();
    var unique_prods = 0;
    var data = this.productService.getLocalCartProducts();
    var uniq = data.map(item => item.$key);
    var uniqueProducts = uniq.filter((x, i, a) => x && a.indexOf(x) === i);
    for (let uq of uniqueProducts){
      unique_prods++;
    }
    this.ratio = this.appcomp.sendArguments(clicks, unique_prods);
    //if (this.ratio < 15){
    this.openModal(template);
    //}
    
  }


}
