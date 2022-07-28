import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demandedevis2Component } from './demandedevis2.component';

describe('Demandedevis2Component', () => {
  let component: Demandedevis2Component;
  let fixture: ComponentFixture<Demandedevis2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demandedevis2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demandedevis2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
