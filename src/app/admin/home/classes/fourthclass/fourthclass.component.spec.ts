import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthclassComponent } from './fourthclass.component';

describe('FourthclassComponent', () => {
  let component: FourthclassComponent;
  let fixture: ComponentFixture<FourthclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
