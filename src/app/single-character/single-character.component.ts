import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/Pokemon';
import { CharactersRepository } from '../services/character-repository.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.scss'],
})
export class SingleCharacterComponent implements OnInit {
  character$?: Observable<Pokemon> = undefined;

  // `private` permet de définir le service `charactersRepository` comme propriété de la class
  constructor(
    private charactersRepository: CharactersRepository,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params.id) {
      this.character$ = this.charactersRepository
        .getCharacterById((this.activatedRoute.snapshot.params.id)).pipe(map((response)=> {
          
          console.log(response);
          return response.data;
        }));
    }
  }
}
