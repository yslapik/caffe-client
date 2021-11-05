import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsLookupComponent } from './positions-lookup.component';

describe('PositionsLookupComponent', () => {
  let component: PositionsLookupComponent;
  let fixture: ComponentFixture<PositionsLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionsLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionsLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
