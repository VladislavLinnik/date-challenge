import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferenceBetweenComponent } from './difference-between.component';

describe('DifferenceBetweenComponent', () => {
  let component: DifferenceBetweenComponent;
  let fixture: ComponentFixture<DifferenceBetweenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferenceBetweenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferenceBetweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
