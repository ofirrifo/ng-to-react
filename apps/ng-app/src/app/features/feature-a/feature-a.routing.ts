import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAComponent } from './page-a/page-a/page-a.component';

const routes: Routes = [
  {
    path: '',
    component: PageAComponent,
  },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
