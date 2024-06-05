import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonDialogComponent } from './create-person-dialog.component';

describe('CreatePersonDialogComponent', () => {
  let component: CreatePersonDialogComponent;
  let fixture: ComponentFixture<CreatePersonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePersonDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePersonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
