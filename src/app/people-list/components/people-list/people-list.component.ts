import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListComponent {

}