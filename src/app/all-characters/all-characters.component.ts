import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { CharactersRepository } from '../services/character-repository.service';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchParams } from '../filter-bar/filter-bar.component';
@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.scss'],
})
export class AllCharactersComponent implements OnInit {
  allCharacters$?: Observable<Pokemon[]>;

  

  constructor(private charactersRepository: CharactersRepository) {}

  ngOnInit(): void {
    this.allCharacters$ = this.charactersRepository
    .getAllCharacters()
    .pipe(map((list) => list.data));
  }

  newSearch(params:SearchParams) {
    this.allCharacters$ = this.charactersRepository
    .getAllCharacters(params.name, params.types )  
    .pipe(map((list) => list.data));
  }
}