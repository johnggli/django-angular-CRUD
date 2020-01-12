import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDetailComponent } from './manager-detail.component';

describe('ManagerDetailComponent', () => {
  let component: ManagerDetailComponent;
  let fixture: ComponentFixture<ManagerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
