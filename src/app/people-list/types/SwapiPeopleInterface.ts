import { PeopleInterface } from "./people.interface";

export interface SwapiPeopleResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PeopleInterface[];
  }