import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontOfCardComponent } from './front-of-card.component';

describe('FrontOfCardComponent', () => {
  let component: FrontOfCardComponent;
  let fixture: ComponentFixture<FrontOfCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontOfCardComponent]
    });
    fixture = TestBed.createComponent(FrontOfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
