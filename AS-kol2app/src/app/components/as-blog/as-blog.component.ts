import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'as-blog',
  templateUrl: './as-blog.component.html',
  styleUrls: ['./as-blog.component.css']
})
export class ASBlogComponent implements OnInit {

  public items$: any;
  
  constructor(private service: DataService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}
