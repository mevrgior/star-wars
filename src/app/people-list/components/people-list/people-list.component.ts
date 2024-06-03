import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PeopleApiService } from '../../service/service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListComponent {
  private peopleService = inject(PeopleApiService);

  $people = this.peopleService.getPagedPeople();
}
