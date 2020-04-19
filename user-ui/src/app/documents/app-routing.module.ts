import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentComponent } from './document/document.component';
import { DocumentExtendComponent } from './document-extend/document-extend.component';
import { DocumentListComponent } from './document-list/document-list.component';

const routes: Routes = [{
	path: '',
	component: DocumentListComponent,
}, {
	path: 'simple',
	component: DocumentComponent,
}, {
	path: 'extend',
	component: DocumentExtendComponent,
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
