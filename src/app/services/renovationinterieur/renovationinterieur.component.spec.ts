import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovationinterieurComponent } from './renovationinterieur.component';

describe('RenovationinterieurComponent', () => {
  let component: RenovationinterieurComponent;
  let fixture: ComponentFixture<RenovationinterieurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenovationinterieurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovationinterieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
