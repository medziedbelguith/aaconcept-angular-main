import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouteHomeComponent } from './aboute-home.component';

describe('AbouteHomeComponent', () => {
  let component: AbouteHomeComponent;
  let fixture: ComponentFixture<AbouteHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbouteHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbouteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
