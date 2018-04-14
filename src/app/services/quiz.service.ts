import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

import { Globals } from './Globals';
import { Entity } from '../models/Entity';


@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }


  getFase():number {
    return Globals.fase;
  }

  mudarFase():void {
    Globals.fase += 1;
    if (Globals.fase == 1) {
      this.generateCards();  
    }
    if (Globals.fase == 2) {
      Globals.resetQuiz();
    }
  }

  getCards(): Entity[] {
    return Globals.cards;
  }

  getEntity(i: number): Entity {
    return Globals.cards[i];
  }

  generateCards() {
    let numerosRand = [];
    for (let i=0; i < 8; i++) {
      numerosRand[i] = Math.trunc(Math.random() * (Globals.numMaxPersonagens + 1)) +1;
    }
    Globals.cards = numerosRand.map(r => this.createCard(r));
  }

  createCard(id: number) {
    let entity: Entity = new Entity();
    this.getData(`https://swapi.co/api/people/${id}`).subscribe(d => {
      Object.assign(entity, {
        name: d['name'],
        specie: d['species'][0],
        height: d['height'],
        hair_color: d['hair_color'],
        planet: d['homeworld']
      });
      this.getData(d['species'][0]).subscribe(specie => entity.specie = specie['name']);
      this.getData(d['homeworld']).subscribe(planet => entity.planet = planet['name']);
      this.initProperties(entity, d['vehicles'], 0, 'vehicles', 'name');
      this.initProperties(entity, d['films'], 0, 'movies', 'title');
      this.getImage(d['name']).subscribe(data => {
        let o:object = JSON.parse(data.slice(15).slice(0,-1));
        let n:number = Math.trunc(Math.random()*o['items'].length);
        entity.foto = o['items'][`${n}`]['media']['m'];
      });
    });
    return entity;
  }

  initProperties(entity: Entity, lista: string[], index: number, campoLocal: string, campoService: string): void {
    if (index < lista.length) {
      this.getData(lista[index]).subscribe(data => {
        entity[campoLocal] += ', ' + data[campoService];
        this.initProperties(entity, lista, index+1, campoLocal, campoService);
      });
    } else {
      entity[campoLocal] = entity[campoLocal].slice(2);
    }
  }

  getData(url: string): Observable<Object> {
  	return this.http.get(url, {responseType: 'json'});
  }

  getImage(tag: string): Observable<string> {
  	let flickerAPI = `https://api.flickr.com/services/feeds/photos_public.gne?tags=${encodeURI(tag)},star%20wars&format=json`;
  	return this.http.get(flickerAPI, {
  		responseType: 'text',
  		withCredentials: true,
  		headers: new HttpHeaders().set('authority', 'api.flickr.com')
  	});	
  }

  getScore(): number {
    return Globals.score;
  }

  sumScore(entity: Entity) {
    if (entity.name.toLowerCase() == entity.name_try.toLowerCase()) {
      Globals.score += entity.consult_tip ? Globals.meioPonto : Globals.inteiroPonto;
    }
  }

  getTimeLimitSec(): number {
    return Globals.timeLimitSec;
  }

}
