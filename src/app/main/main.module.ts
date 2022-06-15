import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { PostComponent } from './post/post.component';
import { DetailComponent } from './detail/detail.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  entryComponents:[
    DetailComponent
  ],
  declarations: [
    HomeComponent,
    ListComponent,
    PostComponent,
    DetailComponent,
    NavbarComponent
  ],
  imports: [
      CommonModule
  ],
  exports: [
    HomeComponent,
    ListComponent,
    PostComponent,
    DetailComponent
  ]
})
export class MainModule { }