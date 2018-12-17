import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationClassComponent } from './notification-class.component';

describe('NotificationClassComponent', () => {
  let component: NotificationClassComponent;
  let fixture: ComponentFixture<NotificationClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
