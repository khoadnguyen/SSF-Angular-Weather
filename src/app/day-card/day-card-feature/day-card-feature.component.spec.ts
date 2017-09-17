import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCardFeatureComponent } from './day-card-feature.component';

describe('DayCardFeatureComponent', () => {
  let component: DayCardFeatureComponent;
  let fixture: ComponentFixture<DayCardFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayCardFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayCardFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
