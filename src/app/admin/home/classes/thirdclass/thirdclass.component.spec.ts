import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdclassComponent } from './thirdclass.component';

describe('ThirdclassComponent', () => {
  let component: ThirdclassComponent;
  let fixture: ComponentFixture<ThirdclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
