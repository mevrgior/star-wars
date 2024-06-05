import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PeopleInterface } from '../types/people.interface';
import { PeopleResponseInterface } from '../types/peopleResponse.interface';


@Injectable({providedIn: 'root'})

export class PeopleApiService {

    constructor(private http: HttpClient) { }

    private extractIdFromUrl(url: string): string {
        const idMatch = url.match(/\/(\d+)\/$/);
        return idMatch ? idMatch[1] : '';
      }
      
    getPagedPeople(): Observable<PeopleInterface[]> {
        return this.http.get<PeopleResponseInterface>('https://swapi.dev/api/people/')
        .pipe(
            map(response => 
                response.results.map(person => ({
                  ...person,
                  id: this.extractIdFromUrl(person.url)
                }))
              )
        )
    }

    getPerson(url: string): Observable<PeopleInterface> {
        return this.http.get<PeopleInterface>(url);
    }
    
}