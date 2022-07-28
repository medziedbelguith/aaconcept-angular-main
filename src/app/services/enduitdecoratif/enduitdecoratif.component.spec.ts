import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnduitdecoratifComponent } from './enduitdecoratif.component';

describe('EnduitdecoratifComponent', () => {
  let component: EnduitdecoratifComponent;
  let fixture: ComponentFixture<EnduitdecoratifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnduitdecoratifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnduitdecoratifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
