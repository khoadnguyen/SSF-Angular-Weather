import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCardDetailsComponent } from './day-card-details.component';

describe('DayCardDetailsComponent', () => {
  let component: DayCardDetailsComponent;
  let fixture: ComponentFixture<DayCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
