import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastdataComponent } from './lastdata.component';

describe('LastdataComponent', () => {
  let component: LastdataComponent;
  let fixture: ComponentFixture<LastdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
