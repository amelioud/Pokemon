import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class CharactersRepository {
  constructor(private httpClient: HttpClient) {}


   getAllCharacters(name?:String, types?:String) {

     let paramStr = '';
     
     if(name) {
       
       paramStr += `name:${name} `;
     }
     if(types) {
       paramStr +=`types:${types} &`;
     }
    return this.httpClient
      .get<{data: Array<Pokemon>}>(`https://api.pokemontcg.io/v2/cards?q=${paramStr}`);
  }

   getCharacterById(id: number) {
    return this.httpClient
      .get<{data:Pokemon}>(`https://api.pokemontcg.io/v2/cards/${id}`);
    
  }
}
