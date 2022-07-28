import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovationfacadeComponent } from './renovationfacade.component';

describe('RenovationfacadeComponent', () => {
  let component: RenovationfacadeComponent;
  let fixture: ComponentFixture<RenovationfacadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenovationfacadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovationfacadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
