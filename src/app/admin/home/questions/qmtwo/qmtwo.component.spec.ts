import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QmtwoComponent } from './qmtwo.component';

describe('QmtwoComponent', () => {
  let component: QmtwoComponent;
  let fixture: ComponentFixture<QmtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QmtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QmtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
