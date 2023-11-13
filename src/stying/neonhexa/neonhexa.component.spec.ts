import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonhexaComponent } from './neonhexa.component';

describe('NeonhexaComponent', () => {
  let component: NeonhexaComponent;
  let fixture: ComponentFixture<NeonhexaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeonhexaComponent]
    });
    fixture = TestBed.createComponent(NeonhexaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
