import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demandedevis1Component } from './demandedevis1.component';

describe('Demandedevis1Component', () => {
  let component: Demandedevis1Component;
  let fixture: ComponentFixture<Demandedevis1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demandedevis1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demandedevis1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
