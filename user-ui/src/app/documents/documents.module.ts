import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentComponent } from './document/document.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DocumentExtendComponent } from './document-extend/document-extend.component';
import { DocumentService } from './document.service';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { TestService } from './test.service';
import { DocumentListComponent } from './document-list/document-list.component';


@NgModule({
	declarations: [
		DocumentComponent,
		DocumentExtendComponent,
		DocumentListComponent,
	],
	imports: [
		CommonModule,
		DocumentsRoutingModule,
		ReactiveFormsModule,
	],
	providers: [
		DocumentService
	],
})
export class DocumentsModule { }
