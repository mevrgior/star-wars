import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { loadPeopleGroup, loadPersonGroup } from '../../store/action';
import * as fromPeopleReducer from '../../store/reducer'
import { combineLatest } from 'rxjs';
import { CreatePersonDialogComponent } from '../create-person-dialog/create-person-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule],
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

  openAddPerson(){
    const dialogRef = this.dialog.open(CreatePersonDialogComponent, {
      width: '400px',
      height: '500px'
    });
  }
}
