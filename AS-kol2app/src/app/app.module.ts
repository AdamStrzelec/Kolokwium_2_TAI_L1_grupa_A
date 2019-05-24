import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { DataService } from './service/data.service';
import { ASDataService } from './service/as-data.service';
import { ASBlogComponent } from './components/as-blog/as-blog.component';
import { ASBlogItemComponent } from './components/as-blog-item/as-blog-item.component';
import { ASBlogItemDetailsComponent } from './components/as-blog-item-details/as-blog-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    ASBlogComponent,
    ASBlogItemComponent,
    ASBlogItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    ASDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
