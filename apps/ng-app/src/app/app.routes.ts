import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
      {
        path: 'pokemons',
        loadChildren: () =>
          import('./features/feature-a/feature-a.module').then((m) => m.FeatureAModule),
      },
      { path: '**', redirectTo: 'pokemons' },
    ],
  },
];
