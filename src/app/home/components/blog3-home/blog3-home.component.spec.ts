import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog3HomeComponent } from './blog3-home.component';

describe('Blog3HomeComponent', () => {
  let component: Blog3HomeComponent;
  let fixture: ComponentFixture<Blog3HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog3HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog3HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
