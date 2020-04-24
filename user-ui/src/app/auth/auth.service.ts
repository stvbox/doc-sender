import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { catchError, tap, map, take, delay, switchMap } from 'rxjs/operators';
import { Response } from '../common/response';
import { isNil } from 'lodash';
import { AuthPair } from './auth.types';
import { UserInfo } from './auth.types';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private userInfo: BehaviorSubject<any> = new BehaviorSubject(null);
	private busyState = { isLoading: false };

	constructor(private http: HttpClient) {
	}

	getBusyState() {
		return this.busyState;
	}

	login(auth: AuthPair): void {
		this.busyState.isLoading = true;
		const headers = new HttpHeaders({
			'Content-Type': 'application/x-www-form-urlencoded',
		});
		const body = `username=${auth.username}&password=${auth.password}`;
		const request = new HttpRequest('POST', '/login-rest', body, { headers });
		this.http.request(request).pipe(
			catchError((error) => {
				this.busyState.isLoading = false;
				throw error;
			}),
		).subscribe((event) => {
			const response = (event as HttpResponse<any>);
			if (response?.status == 200) {
				this.setUserInfo(response.body?.data);
				this.busyState.isLoading = false;
			}
		});
	}

	reloadUserInfo() {
		this.busyState.isLoading = true;
		this.http.get<Response<any>>('/api/auth/user-info').pipe(
			take(1),
			map((response) => response?.data),
			catchError((error) => of(null)),
		).subscribe((userInfo) => {
			this.setUserInfo(userInfo);
		});
		return this.userInfo;
	}

	isAuthorized(): Observable<boolean> {
		return this.reloadUserInfo().pipe(
			map((userInfo) => !isNil(userInfo)),
		);
	}

	private setUserInfo(userInfo: UserInfo) {
		this.busyState.isLoading = false;
		this.userInfo.next(userInfo);
	}

}
