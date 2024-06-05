import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
    path: '',
    loadChildren: () => 
        import('./intro/intro.routes').then((m) => m.INTRO_ROUTES),
    },
    {
    path: 'people',
    loadChildren: () => 
        import('./people-list/people.routes').then((m) => m.PEOPLE_ROUTES),
    }
];
