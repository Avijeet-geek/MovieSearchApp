import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulldetailComponent } from './fulldetail.component';

describe('FulldetailComponent', () => {
  let component: FulldetailComponent;
  let fixture: ComponentFixture<FulldetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulldetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
