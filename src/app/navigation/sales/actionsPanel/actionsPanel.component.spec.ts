import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionspanelComponent } from './actionspanel.component';

describe('ActionspanelComponent', () => {
  let component: ActionspanelComponent;
  let fixture: ComponentFixture<ActionspanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionspanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionspanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
