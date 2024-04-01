import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserExComponent } from './create-user-ex.component';

describe('CreateUserExComponent', () => {
  let component: CreateUserExComponent;
  let fixture: ComponentFixture<CreateUserExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
