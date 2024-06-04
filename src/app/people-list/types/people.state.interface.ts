import { PeopleInterface } from "./people.interface";

export interface PeopleStateInterface {
    isLoadingPeople: boolean,
    isLoadedPeople: boolean,
    people: PeopleInterface[]
    isLoadingPerson: boolean,
    isLoadedPerson: boolean,
    person: PeopleInterface | null | undefined
}
