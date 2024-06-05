import { inject } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PeopleApiService } from "../service/service";
import { PeopleInterface } from "../types/people.interface";
import { loadPeopleGroup, loadPersonGroup } from "./action";
import { catchError, forkJoin, map, of, switchMap, tap } from "rxjs";

export const loadPeople$ = createEffect((
    actions$ = inject(Actions),
    peopleService = inject(PeopleApiService)
) => {
    return actions$.pipe(
        ofType(loadPeopleGroup.peopleLoaded),
        // switchMap(() => {
        //     return peopleService.getPagedPeople('1').pipe(
        //         tap(c => console.log(c, "people")),
        //         map((people: PeopleInterface[]) => {
        //             return loadPeopleGroup.peopleLoadedSuccess({people})
        //         }),
        //         catchError((error) => {
        //             return of(loadPeopleGroup.peopleLoadedFailure({error}))
        //         })
        //     )
        // })
        switchMap(() => {
            const pageNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            const pageObservables = pageNumbers.map(page => peopleService.getPagedPeople(page));
            return forkJoin(pageObservables).pipe(
                // tap(c => console.log(c, "loaded pages")),
                map((peopleArrays: PeopleInterface[][]) => {
                    const allPeople = peopleArrays.flat();
                    return loadPeopleGroup.peopleLoadedSuccess({ people: allPeople });
                }),
                catchError((error) => {
                    return of(loadPeopleGroup.peopleLoadedFailure({ error }));
                })
            );
        })
    )

}, {functional:true})

export const loadPerson$ = createEffect((
    actions$ = inject(Actions),
    peopleService = inject(PeopleApiService)
) => {
    return actions$.pipe(
        ofType(loadPersonGroup.personLoaded),
        switchMap(({url}) => {
            return peopleService.getPerson(url).pipe(
                // tap(c => console.log(c, "person")),
                map((person: PeopleInterface) => {
                    return loadPersonGroup.personLoadedSuccess({person})
                }),
                catchError((error) => {
                    return of(loadPersonGroup.personLoadedFailure({error}))
                })
            )
        } )
    )

}, {functional:true})