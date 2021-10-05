import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResiduesComponentComponent } from './residues-component.component';

describe('ResiduesComponentComponent', () => {
  let component: ResiduesComponentComponent;
  let fixture: ComponentFixture<ResiduesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResiduesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResiduesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
