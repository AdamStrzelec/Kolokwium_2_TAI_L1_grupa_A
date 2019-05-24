import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ASBlogComponent } from './as-blog.component';

describe('ASBlogComponent', () => {
  let component: ASBlogComponent;
  let fixture: ComponentFixture<ASBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ASBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ASBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
