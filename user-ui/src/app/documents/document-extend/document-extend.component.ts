import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { DocumentService } from '../document.service';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '../../common/BaseComponent';

@Component({
	selector: 'document',
	templateUrl: './document-extend.component.html',
	styleUrls: ['./document-extend.component.scss']
})
export class DocumentExtendComponent extends BaseComponent implements OnInit {
	form: FormGroup;

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
		const attributes = { ...this.form.value };
		const documentType = 'extend';
		this.documentSvc.postExtendDocument({ attributes, documentType }).pipe(
			takeUntil(this.unsubscribe),
		).subscribe((result) => {
			console.log(result);
		});
	}

}
