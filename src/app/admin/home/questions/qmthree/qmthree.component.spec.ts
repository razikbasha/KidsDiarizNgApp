import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QmthreeComponent } from './qmthree.component';

describe('QmthreeComponent', () => {
  let component: QmthreeComponent;
  let fixture: ComponentFixture<QmthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QmthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QmthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
