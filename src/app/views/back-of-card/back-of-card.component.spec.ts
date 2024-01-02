import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfCardComponent } from './back-of-card.component';

describe('BackOfCardComponent', () => {
  let component: BackOfCardComponent;
  let fixture: ComponentFixture<BackOfCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackOfCardComponent]
    });
    fixture = TestBed.createComponent(BackOfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
