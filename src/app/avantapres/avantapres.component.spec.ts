import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvantapresComponent } from './avantapres.component';

describe('AvantapresComponent', () => {
  let component: AvantapresComponent;
  let fixture: ComponentFixture<AvantapresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvantapresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvantapresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
