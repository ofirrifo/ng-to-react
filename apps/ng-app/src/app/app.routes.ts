import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'page-a', pathMatch: 'full' },
      {
        path: 'page-a',
        loadChildren: () =>
          import('./features/feature-a/feature-a.module').then((m) => m.FeatureAModule),
      },
      { path: '**', redirectTo: 'page-a' },
    ],
  },
];
