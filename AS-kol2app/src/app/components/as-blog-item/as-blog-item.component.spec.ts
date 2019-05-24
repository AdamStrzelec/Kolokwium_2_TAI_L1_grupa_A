import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ASBlogItemComponent } from './as-blog-item.component';

describe('ASBlogItemComponent', () => {
  let component: ASBlogItemComponent;
  let fixture: ComponentFixture<ASBlogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ASBlogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ASBlogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
