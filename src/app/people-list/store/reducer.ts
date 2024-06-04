import { createFeature, createReducer, on } from "@ngrx/store";
import { PeopleStateInterface } from "../types/people.state.interface";
import { loadPeopleGroup, loadPersonGroup } from "./action";

const initialState: PeopleStateInterface = {
    isLoadingPeople: false,
    isLoadedPeople: false,
    people: [],
    isLoadingPerson: false,
    isLoadedPerson: false,
    person: null
}

const peopleFeature = createFeature({
    name: 'people',
    reducer: createReducer(
        initialState,
        on(loadPeopleGroup.peopleLoaded, state => ({ ...state, isLoadingPeople: true})),
        on(loadPeopleGroup.peopleLoadedSuccess, (state, action) => ({ ...state,
            isLoadingPeople: false,
            isLoaded: true,
            people: action.people
        })),
        on(loadPeopleGroup.peopleLoadedFailure, state => ({ ...state, isLoadingPeople: false, isLoaded: false})),
        on(loadPersonGroup.personLoaded, state => ({ ...state, isLoadingPerson: true})),
        on(loadPersonGroup.personLoadedSuccess, (state, action) => ({
            ...state,
            isLoadingPerson: false,
            isLoadedPerson: true,
            person: action.person
        }) )

    )
})

export const { 
    name: peopleFeatureKey,
    reducer: peopleReducer,
    selectIsLoadingPeople,
    selectIsLoadedPeople,
    selectPeople,
    selectIsLoadingPerson,
    selectIsLoadedPerson,
    selectPerson
} = peopleFeature;