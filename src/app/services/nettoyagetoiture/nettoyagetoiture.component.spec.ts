import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NettoyagetoitureComponent } from './nettoyagetoiture.component';

describe('NettoyagetoitureComponent', () => {
  let component: NettoyagetoitureComponent;
  let fixture: ComponentFixture<NettoyagetoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NettoyagetoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NettoyagetoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
