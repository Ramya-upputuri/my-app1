import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotogallaryComponent } from './photogallary.component';

describe('PhotogallaryComponent', () => {
  let component: PhotogallaryComponent;
  let fixture: ComponentFixture<PhotogallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotogallaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotogallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
