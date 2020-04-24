import { Injectable } from '@angular/core';
import { HttpClient, HttpXsrfTokenExtractor, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { BaseDocument } from './BaseDocument';
import { Response } from '../common/response';

interface Options {
	headers?: HttpHeaders | {
		[header: string]: string | string[];
	};
	observe: 'response';
	params?: HttpParams | {
		[param: string]: string | string[];
	};
	reportProgress?: boolean;
	responseType?: 'json';
	withCredentials?: boolean;
};

@Injectable({
	providedIn: 'root'
})
export class DocumentService {
	constructor(private http: HttpClient) { }

	getDocuments(page: number) {
		const params: Options = {
			observe: 'response',
			responseType: 'json',
			params: {
				page: String(page)
			}
		};
		return this.http.get<Response<any>>('/api/document/get-list', params).pipe(
			tap((response) => console.log(response)),
			catchError((error) => {
				console.error(error);
				return of(null);
			}),
			map((response) => response.body),
		);
	}

	postDocument(document: BaseDocument) {
		return this.http.post<Response<any>>('/api/document/post', document).pipe(
			catchError((error) => {
				console.error(error);
				return of(null);
			}),
			map((response) => response.data),
		);
	}

	postExtendDocument(document: BaseDocument) {
		return this.http.post<Response<any>>('/api/extend/post', document).pipe(
			catchError((error) => {
				console.error(error);
				return of(null);
			}),
			map((response) => {
				if (response?.data?.errors) {
					throw (response.data.errors);
				}
				return response?.data;
			}),
		);
	}

}
