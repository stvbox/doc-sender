import { Component, OnInit } from '@angular/core';
import { takeUntil, switchMap, map } from 'rxjs/operators';
import { BaseComponent } from '../../common/BaseComponent';
import { DocumentService } from '../document.service';
import { Subject } from 'rxjs';

const PAGE_SIZE = 5;

interface Pagedocument {
	documents: any[];
	page: number;
}

@Component({
	selector: 'app-document-list',
	templateUrl: './document-list.component.html',
	styleUrls: ['./document-list.component.scss'],
})
export class DocumentListComponent extends BaseComponent implements OnInit {
	currentPage: number = 0;
	documents: any[] = [];
	documentsPage: Subject<number> = new Subject();

	constructor(private documentSvc: DocumentService) {
		super();
	}
	ngOnInit(): void {
		this.documentsPage.pipe(
			switchMap((page) => this.documentSvc.getDocuments(page)),
			takeUntil(this.unsubscribe),
		).subscribe((response) => {
			const { data: documents, pageNum: page } = response;
			this.currentPage = page;
			const offset = PAGE_SIZE * page;
			for (let i = 0; i < PAGE_SIZE; i++) {
				this.documents[offset + i] = documents[i];
			}
		});

		this.documentsPage.next(0);
	}

	nextPage() {
		this.documentsPage.next(this.currentPage + 1);
	}
}
