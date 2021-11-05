import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionTypesLookupComponent } from './position-types-lookup.component';

describe('PositionTypesLookupComponent', () => {
  let component: PositionTypesLookupComponent;
  let fixture: ComponentFixture<PositionTypesLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionTypesLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionTypesLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
