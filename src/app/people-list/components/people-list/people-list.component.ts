import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { loadPeopleGroup, loadPersonGroup, selectPersonGroup } from '../../store/action';
import * as fromPeopleReducer from '../../store/reducer'
import { combineLatest } from 'rxjs';
import { CreatePersonDialogComponent } from '../create-person-dialog/create-person-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { ThemePalette } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { PeopleInterface } from '../../types/people.interface';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatProgressSpinnerModule, MatCardModule, MatChipsModule, MatButtonModule, MatIconModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListComponent implements OnInit{
  public dialog = inject(MatDialog);
  private store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(loadPeopleGroup.peopleLoaded());
  }
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];

  vm$ = combineLatest({
    isLoadingPeople: this.store.pipe(select(fromPeopleReducer.selectIsLoadingPeople)),
    isLoadedPeople: this.store.pipe(select(fromPeopleReducer.selectIsLoadedPeople)),
    people: this.store.pipe(select(fromPeopleReducer.selectPeople)),
    isLoadingPerson: this.store.pipe(select(fromPeopleReducer.selectIsLoadingPerson)),
    isLoadedPerson: this.store.pipe(select(fromPeopleReducer.selectIsLoadedPerson)),
    selectedPerson: this.store.pipe(select(fromPeopleReducer.selectSelectedPerson))
  })

  onLoadPeople() {
    this.store.dispatch(loadPeopleGroup.peopleLoaded());
  }

  loadPersonDetails(person: PeopleInterface){
    const url = person.url;
    url ? this.store.dispatch(loadPersonGroup.personLoaded({url})) : this.store.dispatch(selectPersonGroup.selectPerson({person}))
  }

  openAddPerson(){
    const dialogRef = this.dialog.open(CreatePersonDialogComponent, {
      width: '300px',
      height: '500px'
    });
  }
}
