import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { DocumentService } from '../document.service';
import { takeUntil, catchError } from 'rxjs/operators';
import { BaseComponent } from '../../common/BaseComponent';
import { never } from 'rxjs';
import { isNil } from 'lodash';

interface FormError {
	code: String;
}

@Component({
	selector: 'document',
	templateUrl: './document-extend.component.html',
	styleUrls: ['./document-extend.component.scss']
})
export class DocumentExtendComponent extends BaseComponent implements OnInit {
	form: FormGroup;
	sentState: boolean;
	busyState: boolean;
	errors = {};

	constructor(
		private fb: FormBuilder,
		private documentSvc: DocumentService,
	) {
		super();
	}

	ngOnInit(): void {
		this.form = this.fb.group({
			extend: [],
			description: [],
		});
	}

	sendDocument() {
		this.busyState = true;
		const attributes = { ...this.form.value };
		const documentType = 'extend';
		this.documentSvc.postExtendDocument({ attributes, documentType }).pipe(
			catchError((errors) => {
				this.busyState = false;
				this.applyErrors(errors);
				throw (errors);
			}),
			takeUntil(this.unsubscribe),
		).subscribe((result) => {
			this.busyState = false;
			this.sentState = true;
			this.applyErrors(null);
		});
	}

	applyErrors(errors: Array<FormError>) {

		if (isNil(errors)) {
			this.errors = {};
			return;
		}

		this.errors = errors.reduce((memo, error) => {
			const errorCode = error.code.split('_')[1];
			memo[errorCode] = true;
			return memo;
		}, {});

	}

}
