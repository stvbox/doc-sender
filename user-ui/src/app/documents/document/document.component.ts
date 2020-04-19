import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DocumentService } from '../document.service';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '../../common/BaseComponent';
import { TestService } from '../test.service';

@Component({
	selector: 'document',
	templateUrl: './document.component.html',
	styleUrls: ['./document.component.scss'],
})
export class DocumentComponent extends BaseComponent implements OnInit {

	descriptionText: FormControl = new FormControl();

	constructor(private documentSvc: DocumentService) {
		super();
	}

	ngOnInit(): void {

	}

	sendDocument() {
		const attributes = { description: this.descriptionText.value };
		const documentType = 'simple';
		this.documentSvc.postDocument({ attributes, documentType }).pipe(
			takeUntil(this.unsubscribe),
		).subscribe((result) => {
			console.log(result);
		});
	}

}
