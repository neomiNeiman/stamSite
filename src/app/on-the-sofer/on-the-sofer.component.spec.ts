import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnTheSoferComponent } from './on-the-sofer.component';

describe('OnTheSoferComponent', () => {
  let component: OnTheSoferComponent;
  let fixture: ComponentFixture<OnTheSoferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnTheSoferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnTheSoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
