import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
    path: 'people',
    loadChildren: () => 
        import('./people-list/people.routes').then((m) => m.PEOPLE_ROUTES),
}
];
