import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface Pokemon {
  name: string;
  url: string;
}

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

@Component({
  selector: 'ng-to-react-page-pokemons',
  templateUrl: './page-pokemons.component.html',
  styleUrls: ['./page-pokemons.component.scss'],
})
export class PagePokemonsComponent {
  public items$: Observable<Pokemon[]> = this.http
    .get<ApiResponse>('https://pokeapi.co/api/v2/pokemon')
    .pipe(map(({ results }) => results));
  public selectedPokemonName = '';

  constructor(private http: HttpClient) {}

  trackByFn(index: number, item: Pokemon) {
    return item.name;
  }

  handleSelection(name: string) {
    this.selectedPokemonName = name;
    console.log('Selected pokemon name: ', name);
  }
}
