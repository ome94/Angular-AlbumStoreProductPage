import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/add/operator';

@Injectable()
export class ProductService {

  _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum() {
    return this._http.get(this._albumUrl).pipe(
      map(product => product.json())
    );
  }

}
