import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
	declarations: [
		AuthFormComponent,
	],
	exports: [
		AuthFormComponent,
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
	],
	providers: [
		AuthService,
	]
})
export class AuthModule { }
