import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import "rxjs/add/observable/interval";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Book {

  constructor(public http: Http) {
    console.log('Hello Book Provider');
  }

  getBooksWithPromise(): Promise<any> {
        return this.http.get("http://localhost/books/findAll.php").toPromise().then((res: Response) => res.json());
  }
  async getBooksWithObservable() {
        return this.http.get("http://localhost/books/findAll.php").map((res: Response) => res.json());
  }
  getCurrentTime(): Observable<any> {
  	return new Observable<any>((observer: Subscriber<any>) => {
        this.http.get("http://localhost/books/findAll.php").subscribe((data) => {
          observer.next(data.json())
        });
    });
  }

}
