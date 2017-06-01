import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {
    private serviceUrl = 'http://sample-store-api.azurewebsites.net/';

    constructor(public http: Http) { }

    getHeaders(): any {
        const token = localStorage.getItem('token');
        const headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Bearer ${token}`);
        const options = new RequestOptions({ headers: headers });
        return options;
    }

    authenticate(data: any) {
        return this
            .http
            .post(this.serviceUrl + 'v1/authenticate', data)
            .map((res: Response) => res.json());
    }

    getProducts() {
        return this.http.get(this.serviceUrl + 'v1/products', this.getHeaders()).map((res: Response) => res.json());
    }

    getProduct(id) {
        return this.http.get(this.serviceUrl + 'v1/products/' + id, this.getHeaders()).map((res: Response) => res.json());
    }

    postProduct(data) {
        return this.http.post(this.serviceUrl + 'v1/products', data, this.getHeaders());
    }

    putProduct(id, data) {
        return this.http.put(this.serviceUrl + 'v1/products/' + id, data, this.getHeaders());
    }

    deleteProduct(id) {
        return this.http.delete(this.serviceUrl + 'v1/products/' + id, this.getHeaders());
    }
}