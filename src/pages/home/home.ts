import { Book } from './../../providers/book';
import { Component } from '@angular/core';
import { Http,Response } from '@angular/http';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/interval";
import 'rxjs/add/operator/map'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[Book]
})
export class HomePage {
  Books: Observable<any>;


  constructor(public navCtrl: NavController, public http: Http, private books: Book) {
    books.getBooksWithObservable().then((data)=>{
    this.Books =  data;
    });

  }

  

}
