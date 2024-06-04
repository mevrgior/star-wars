import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PeopleInterface } from '../types/people.interface';
import { SwapiPeopleResponse } from '../types/SwapiPeopleInterface';

@Injectable({providedIn: 'root'})

export class PeopleApiService {

    constructor(private http: HttpClient) { }

    getPagedPeople(): Observable<PeopleInterface[]> {
        return this.http.get<SwapiPeopleResponse>('https://swapi.dev/api/people/')
        .pipe(map((response) => 
            response.results
        ))
    }

    getPerson(url: string): Observable<PeopleInterface> {
        return this.http.get<PeopleInterface>(url);
    }
    
}