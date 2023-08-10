import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
export class PageAComponent implements OnInit {
  public items: Pokemon[] = [];
  public selectedPokemonName = '';


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon').subscribe((response: any) => {
      this.items = response.results;
    })
  }

  addItem() {

  }

  trackByFn(index: number, item: Pokemon) {
    return item.name;
  }

  handleSelection(item: Pokemon) {
    this.selectedPokemonName = item.name;
  }
}
