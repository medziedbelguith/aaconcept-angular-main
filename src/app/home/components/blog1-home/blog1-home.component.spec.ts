import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog1HomeComponent } from './blog1-home.component';

describe('Blog1HomeComponent', () => {
  let component: Blog1HomeComponent;
  let fixture: ComponentFixture<Blog1HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog1HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
