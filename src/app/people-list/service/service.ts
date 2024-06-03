import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class PeopleApiService {
    baseURl = "https://swapi.dev/api/"; 

    constructor(private http: HttpClient) { }

    getPagedPeople(): Observable<any> {
        return this.http.get<any>('https://swapi.dev/api/people')
    }
    
}