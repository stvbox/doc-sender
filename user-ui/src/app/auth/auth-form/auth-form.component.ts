import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '../../common/BaseComponent';

@Component({
	selector: 'auth-form',
	templateUrl: './auth-form.component.html',
	styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent extends BaseComponent implements OnInit {
	form: FormGroup;
	busyState;

	constructor(
		private fb: FormBuilder,
		private authSvc: AuthService
	) { super(); }

	ngOnInit(): void {
		this.busyState = this.authSvc.getBusyState();

		this.form = this.fb.group({
			username: [null, Validators.required],
			password: [null, Validators.required],
		});
	}

	onSubmit() {
		this.authSvc.login(this.form.value);
	}

}
