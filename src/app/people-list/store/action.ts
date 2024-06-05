import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { PeopleInterface } from "../types/people.interface";

export const loadPeople = createAction('[People List] Load People');

export const loadPeopleGroup= createActionGroup({
    source: 'People API',
    events: {
        'People Loaded': emptyProps(),
        'People Loaded Success': props<{people: PeopleInterface[]}>(),
        'People Loaded Failure': props<{ error: any }>()
    }
});

export const loadPersonGroup= createActionGroup({
    source: 'Person API',
    events: {
        'Person Loaded': props<{url: string}>(),
        'Person Loaded Success': props<{person: PeopleInterface}>(),
        'Person Loaded Failure': props<{ error: any }>()
    }
});

export const addPersonGroup= createActionGroup({
    source: 'Person Dialog',
    events: {
        'addPerson': props<{person: PeopleInterface}>(),
    }
});

export const selectPersonGroup= createActionGroup({
    source: 'Person Detail',
    events: {
        'selectPerson': props<{person: PeopleInterface}>(),
    }
});
