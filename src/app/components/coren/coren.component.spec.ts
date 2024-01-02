import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorenComponent } from './coren.component';

describe('CorenComponent', () => {
  let component: CorenComponent;
  let fixture: ComponentFixture<CorenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorenComponent]
    });
    fixture = TestBed.createComponent(CorenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
