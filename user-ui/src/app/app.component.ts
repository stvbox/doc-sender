import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BaseComponent } from './common/BaseComponent';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
	title = 'Simple documents sender';
	isAuthorized: boolean = false;
	busyState: { isLoading: boolean };

	constructor(private authSvc: AuthService) {
		super();
	}

	ngOnInit() {
		this.busyState = this.authSvc.getBusyState();
		this.authSvc.isAuthorized().pipe(
			takeUntil(this.unsubscribe),
		).subscribe((isAuthorized) => {
			this.isAuthorized = isAuthorized;
		});
	}

	reloadUserInfo() {
		this.authSvc.reloadUserInfo();
	}

}
