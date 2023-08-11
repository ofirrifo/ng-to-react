import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './feature-a.routing';
import { PagePokemonsComponent } from './page-pokemons/page-pokemons.component';
import { ArrowNavDirective } from '../../directives/arrow-nav.directive';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [PagePokemonsComponent, ArrowNavDirective],
})
export class FeatureAModule {}
