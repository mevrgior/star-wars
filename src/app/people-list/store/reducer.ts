import { createFeature, createReducer, on } from "@ngrx/store";
import { PeopleStateInterface } from "../types/people.state.interface";
import { addPersonGroup, loadPeopleGroup, loadPersonGroup, selectPersonGroup } from "./action";


const initialState: PeopleStateInterface = {
    isLoadingPeople: false,
    isLoadedPeople: false,
    people: [],
    localPeople: [],
    isLoadingPerson: false,
    isLoadedPerson: false,
    selectedPerson: null
}

const peopleFeature = createFeature({
    name: 'peopleState',
    reducer: createReducer(
        initialState,
        on(loadPeopleGroup.peopleLoaded, state => ({ ...state, isLoadingPeople: true})),
        on(loadPeopleGroup.peopleLoadedSuccess, (state, action) => ({ ...state,
            isLoadingPeople: false,
            isLoaded: true,
            people: [...state.localPeople, ...action.people]
        })),
        on(loadPeopleGroup.peopleLoadedFailure, state => ({ ...state, isLoadingPeople: false, isLoaded: false})),
        on(loadPersonGroup.personLoaded, state => ({ ...state, isLoadingPerson: true})),
        on(loadPersonGroup.personLoadedSuccess, (state, action) => ({
            ...state,
            isLoadingPerson: false,
            isLoadedPerson: true,
            selectedPerson: action.person
        })),
        on(addPersonGroup.addPerson, (state,action) => {
            return { 
                ...state,
                people: [action.person, ...state.people],
                localPeople: [action.person, ...state.localPeople]
            }
        }),
        on(selectPersonGroup.selectPerson, (state, action) => {
            return {
                ...state,
                selectedPerson: action.person
            }
        })
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
    selectSelectedPerson
} = peopleFeature;