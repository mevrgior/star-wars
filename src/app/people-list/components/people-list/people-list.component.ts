import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { loadPeople, loadPeopleGroup, loadPersonGroup } from '../../store/action';
import * as fromPeopleReducer from '../../store/reducer'
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListComponent implements OnInit{

  private store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(loadPeopleGroup.peopleLoaded());
  }
  vm$ = combineLatest({
    isLoadingPeople: this.store.pipe(select(fromPeopleReducer.selectIsLoadingPeople)),
    isLoadedPeople: this.store.pipe(select(fromPeopleReducer.selectIsLoadedPeople)),
    people: this.store.pipe(select(fromPeopleReducer.selectPeople)),
    isLoadingPerson: this.store.pipe(select(fromPeopleReducer.selectIsLoadingPerson)),
    isLoadedPerson: this.store.pipe(select(fromPeopleReducer.selectIsLoadedPerson)),
    selectedPerson: this.store.pipe(select(fromPeopleReducer.selectPerson))
  })

  onLoadPeople() {
    this.store.dispatch(loadPeopleGroup.peopleLoaded());
  }

  loadPersonDetails(url: string){
    console.log(url);
    this.store.dispatch(loadPersonGroup.personLoaded({url}))
  }
}
