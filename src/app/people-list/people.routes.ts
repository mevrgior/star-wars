import { Routes } from "@angular/router";
import { PeopleListComponent } from "./components/people-list/people-list.component";

export const PEOPLE_ROUTES: Routes = [
    {
        path: '',
        component: PeopleListComponent,
    },
]