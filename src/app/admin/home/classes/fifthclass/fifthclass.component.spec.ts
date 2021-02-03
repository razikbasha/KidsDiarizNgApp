import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthclassComponent } from './fifthclass.component';

describe('FifthclassComponent', () => {
  let component: FifthclassComponent;
  let fixture: ComponentFixture<FifthclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
