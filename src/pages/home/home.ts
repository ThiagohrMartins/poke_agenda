import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController, NavParams, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
//import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  public pokemons: Array<string>;
  public pokemonDetail: any;
  private url: string = "https://pokeapi.co/api/v2/pokemon/";
  private next: string = "";

  constructor(public navCtrl: NavController, public http:Http,
    public loadingCtrl: LoadingController, public modalCtrl: ModalController,
   ) {
    this.fetchContent();
  }

  fetchContent():void{
    let loading = this.loadingCtrl.create({
      content: 'Fetching content...'
    });

    loading.present();

    this.http.get(this.url).map(res=>res.json())
    .subscribe(data=>{
      this.pokemons = data.results;
      this.next = data.next;
      loading.dismiss();
    });

    
  }

  itemSelected(pokemon):void{
    let loading = this.loadingCtrl.create({
       content:'Fetching content...'
    })
    loading.present();
    //console.log(JSON.stringify(pokemon));
    this.http.get(pokemon.url).map(res=>res.json())
    .subscribe(data=>{
      this.pokemonDetail = data;
      //this.pokemonDetail = JSON.stringify(this.pokemonDetail);  
      console.log(this.pokemonDetail); 
      let pokeDetailModal = this.modalCtrl.create('PokemonDetailPage',{pokemon:this.pokemonDetail});
      loading.dismiss();
      pokeDetailModal.present();
      //loading.dismiss();
    });
  }
  
  doInfinite(infiniteScroll) {        
    this.http.get(this.next).map(res => res.json())
      .subscribe(data => {      
        this.pokemons = this.pokemons.concat(data.results);
        this.next = data.next;
        infiniteScroll.complete();
      }); 
  }  
}