import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demandedevis4Component } from './demandedevis4.component';

describe('Demandedevis4Component', () => {
  let component: Demandedevis4Component;
  let fixture: ComponentFixture<Demandedevis4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demandedevis4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demandedevis4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
