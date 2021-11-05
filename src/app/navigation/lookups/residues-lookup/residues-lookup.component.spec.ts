import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResiduesLookupComponent } from './residues-lookup.component';

describe('ResiduesLookupComponent', () => {
  let component: ResiduesLookupComponent;
  let fixture: ComponentFixture<ResiduesLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResiduesLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResiduesLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
