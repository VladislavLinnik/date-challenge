import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendsCounterComponent } from './weekends-counter.component';

describe('WeekendsCounterComponent', () => {
  let component: WeekendsCounterComponent;
  let fixture: ComponentFixture<WeekendsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekendsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekendsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
