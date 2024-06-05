import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatCardModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroComponent {

}
