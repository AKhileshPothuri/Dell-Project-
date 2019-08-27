import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../shared/services/product.service';
import { UserQuery, User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

declare var toastr: any;

@Component({
	selector: 'app-chatbot',
	templateUrl: './chatbot.html',
	styleUrls: [ './chatbot.scss' ]
})
export class ChatBotComponent implements OnInit {
	userDetails: User;
	userQuery: UserQuery;

	constructor(
		authService: AuthService,
		private router: Router
	) {
		/* Hiding Shipping Tab Element */
		this.userQuery = new UserQuery();
		this.userDetails = authService.getLoggedInUser();
	}

	ngOnInit() {}

	// updateUserDetails(form: NgForm) {
	// 	const data = form.value;

	// 	data['emailId'] = this.userDetails.emailId;
	// 	data['userId'] = this.userDetails.$key;


	// 	this.billingService.createBillings(data);

	// 	this.router.navigate([ 'checkouts', { outlets: { checkOutlet: [ 'result' ] } } ]);
	// }

	onFinish(){
		this.router.navigate(['/']);
		toastr.success('Our Expert will contact you shortly.', 'Query Received');
	}
}
