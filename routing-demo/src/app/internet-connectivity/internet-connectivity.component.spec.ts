import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetConnectivityComponent } from './internet-connectivity.component';

describe('InternetConnectivityComponent', () => {
  let component: InternetConnectivityComponent;
  let fixture: ComponentFixture<InternetConnectivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetConnectivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetConnectivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
