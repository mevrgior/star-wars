import { createFeature, createReducer, on } from "@ngrx/store";
import { PeopleStateInterface } from "../types/people.state.interface";
import { addPersonGroup, loadPeopleGroup, loadPersonGroup } from "./action";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { PeopleInterface } from "../types/people.interface";

// export interface State extends EntityState<PeopleStateInterface> {
//     isLoadingPeople: boolean,
//     isLoadedPeople: boolean,
//     people: PeopleInterface[],
//     isLoadingPerson: boolean,
//     isLoadedPerson: boolean,
//     person: PeopleInterface
// }

// export const adapter: EntityAdapter<PeopleStateInterface> =
//     createEntityAdapter<PeopleStateInterface>({
//         selectId: ()
//     })

const initialState: PeopleStateInterface = {
    isLoadingPeople: false,
    isLoadedPeople: false,
    people: [],
    isLoadingPerson: false,
    isLoadedPerson: false,
    person: null
}

const peopleFeature = createFeature({
    name: 'peopleState',
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
        })),
        // on(addPersonGroup.addPerson, (state,action) => ({
        //     ...state,
        //     person: 
        // }))
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