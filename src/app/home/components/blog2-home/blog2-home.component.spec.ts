import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog2HomeComponent } from './blog2-home.component';

describe('Blog2HomeComponent', () => {
  let component: Blog2HomeComponent;
  let fixture: ComponentFixture<Blog2HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blog2HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blog2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
