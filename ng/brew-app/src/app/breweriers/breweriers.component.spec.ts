import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweriersComponent } from './breweriers.component';

describe('BreweriersComponent', () => {
  let component: BreweriersComponent;
  let fixture: ComponentFixture<BreweriersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweriersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweriersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
