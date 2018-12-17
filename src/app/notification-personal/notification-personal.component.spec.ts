import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationPersonalComponent } from './notification-personal.component';

describe('NotificationPersonalComponent', () => {
  let component: NotificationPersonalComponent;
  let fixture: ComponentFixture<NotificationPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
