import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {

  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }

  // getPokemonUrl(pokemonUrl){
  //   //if (this.data) {
  //     //return Promise.resolve(this.data);
  //   //}
  
  //   return new Promise(resolve => {
  //     this.http.get(pokemonUrl)
  //       .map(res => res.json())
  //       .subscribe(data => {
  //         this.data = data;
  //         resolve(this.data);
  //       });
  //   });
  // }

}
