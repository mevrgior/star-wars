import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PeopleInterface } from '../../types/people.interface';

@Component({
  selector: 'app-create-person-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-person-dialog.component.html',
  styleUrl: './create-person-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePersonDialogComponent {
  public dialogRef: MatDialogRef<CreatePersonDialogComponent> = inject(MatDialogRef);
  private fb: FormBuilder = inject(FormBuilder)
  personForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    height: ['', Validators.required],
    mass: ['', Validators.required],
    birth_year: ['', Validators.required],
    gender: ['', Validators.required],
    hair_color: '',
    skin_color: '',
    eye_color: '',
  });

  onSubmit(): void {
    if (this.personForm.valid) {
      const newPerson: PeopleInterface = this.personForm.value;
      this.dialogRef.close(newPerson);
      console.log(newPerson, "newPerson");
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
