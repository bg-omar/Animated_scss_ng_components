import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleBorderComponent } from './double-border.component';

describe('DoubleBorderComponent', () => {
  let component: DoubleBorderComponent;
  let fixture: ComponentFixture<DoubleBorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoubleBorderComponent]
    });
    fixture = TestBed.createComponent(DoubleBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
