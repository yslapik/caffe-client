import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResiduesComponent } from './residues.component';

describe('ResiduesComponent', () => {
  let component: ResiduesComponent;
  let fixture: ComponentFixture<ResiduesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResiduesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResiduesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
