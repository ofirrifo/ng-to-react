import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface Response {
  results: Pokemon[];
}

interface Pokemon {
  name: string;
}

@Component({
  selector: 'ng-to-react-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss'],
})
export class PageAComponent {
  public items$: Observable<Pokemon[]> = this.http.get('https://pokeapi.co/api/v2/pokemon')
    .pipe(map((response: any) => {
      return response.results;
    }));
  public selectedPokemonName = '';


  constructor(private http: HttpClient) {
  }

  addItem() {

  }

  trackByFn(index: number, item: Pokemon) {
    return item.name;
  }

  handleSelection(name: string) {
    this.selectedPokemonName = name;
  }
}
