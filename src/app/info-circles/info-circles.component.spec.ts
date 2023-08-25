import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCirclesComponent } from './info-circles.component';

describe('InfoCirclesComponent', () => {
  let component: InfoCirclesComponent;
  let fixture: ComponentFixture<InfoCirclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCirclesComponent]
    });
    fixture = TestBed.createComponent(InfoCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
