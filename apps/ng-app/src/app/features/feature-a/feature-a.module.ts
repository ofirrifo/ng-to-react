import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './feature-a.routing';
import { PageAComponent } from './page-a/page-a/page-a.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [PageAComponent]
})
export class FeatureAModule {}
