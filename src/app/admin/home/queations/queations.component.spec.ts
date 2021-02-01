import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueationsComponent } from './queations.component';

describe('QueationsComponent', () => {
  let component: QueationsComponent;
  let fixture: ComponentFixture<QueationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
