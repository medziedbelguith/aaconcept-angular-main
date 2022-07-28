import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demandedevis3Component } from './demandedevis3.component';

describe('Demandedevis3Component', () => {
  let component: Demandedevis3Component;
  let fixture: ComponentFixture<Demandedevis3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demandedevis3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demandedevis3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
