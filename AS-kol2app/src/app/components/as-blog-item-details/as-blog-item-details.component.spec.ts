import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ASBlogItemDetailsComponent } from './as-blog-item-details.component';

describe('ASBlogItemDetailsComponent', () => {
  let component: ASBlogItemDetailsComponent;
  let fixture: ComponentFixture<ASBlogItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ASBlogItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ASBlogItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
