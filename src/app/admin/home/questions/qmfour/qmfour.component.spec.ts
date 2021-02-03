import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QmfourComponent } from './qmfour.component';

describe('QmfourComponent', () => {
  let component: QmfourComponent;
  let fixture: ComponentFixture<QmfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QmfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QmfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
