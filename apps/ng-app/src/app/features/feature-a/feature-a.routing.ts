import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePokemonsComponent } from './page-pokemons/page-pokemons.component';

const routes: Routes = [
  {
    path: '',
    component: PagePokemonsComponent,
  },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
