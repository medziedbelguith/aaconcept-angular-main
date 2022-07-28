import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog4HomeComponent } from './blog4-home.component';

describe('Blog4HomeComponent', () => {
  let component: Blog4HomeComponent;
  let fixture: ComponentFixture<Blog4HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog4HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog4HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
