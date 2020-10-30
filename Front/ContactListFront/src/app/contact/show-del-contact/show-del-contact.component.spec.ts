import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDelContactComponent } from './show-del-contact.component';

describe('ShowDelContactComponent', () => {
  let component: ShowDelContactComponent;
  let fixture: ComponentFixture<ShowDelContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDelContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDelContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
