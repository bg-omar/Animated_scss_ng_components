import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexaComponent } from './hexa.component';

describe('HexaComponent', () => {
  let component: HexaComponent;
  let fixture: ComponentFixture<HexaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HexaComponent]
    });
    fixture = TestBed.createComponent(HexaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
