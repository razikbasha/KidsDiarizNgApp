import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QmoneComponent } from './qmone.component';

describe('QmoneComponent', () => {
  let component: QmoneComponent;
  let fixture: ComponentFixture<QmoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QmoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QmoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
