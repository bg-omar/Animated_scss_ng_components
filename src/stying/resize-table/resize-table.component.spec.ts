import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeTableComponent } from './resize-table.component';

describe('ResizeTableComponent', () => {
  let component: ResizeTableComponent;
  let fixture: ComponentFixture<ResizeTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResizeTableComponent]
    });
    fixture = TestBed.createComponent(ResizeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
