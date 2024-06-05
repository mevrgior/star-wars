import { PeopleInterface } from "./people.interface";

export interface PeopleResponseInterface {
    count: number;
    next: string | null;
    previous: string | null;
    results: PeopleInterface[];
  }