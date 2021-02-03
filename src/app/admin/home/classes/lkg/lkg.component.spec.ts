import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkgComponent } from './lkg.component';

describe('LkgComponent', () => {
  let component: LkgComponent;
  let fixture: ComponentFixture<LkgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
