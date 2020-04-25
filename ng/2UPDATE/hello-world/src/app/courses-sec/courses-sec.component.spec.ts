import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSecComponent } from './courses-sec.component';

describe('CoursesSecComponent', () => {
  let component: CoursesSecComponent;
  let fixture: ComponentFixture<CoursesSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
