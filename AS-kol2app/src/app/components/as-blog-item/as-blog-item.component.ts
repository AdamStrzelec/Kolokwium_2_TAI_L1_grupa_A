import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'as-blog-item',
  templateUrl: './as-blog-item.component.html',
  styleUrls: ['./as-blog-item.component.css']
})
export class ASBlogItemComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
