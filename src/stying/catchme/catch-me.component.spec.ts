import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CatchMeComponent} from './catch-me.component';

describe('ScrollNavComponent', (): void => {
  let component: CatchMeComponent;
  let fixture: ComponentFixture<CatchMeComponent>;

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      declarations: [ CatchMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(CatchMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
