import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { PostComponent } from './post/post.component';
import { DetailComponent } from './detail/detail.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from '../app.routing.module.';

@NgModule({
  entryComponents:[
    DetailComponent
  ],
  declarations: [
    HomeComponent,
    ListComponent,
    PostComponent,
    DetailComponent,
    NavbarComponent,
    UserComponent
  ],
  imports: [
      AppRoutingModule,
      CommonModule,
      SharedModule
  ],
  exports: [
    HomeComponent,
    ListComponent,
    PostComponent,
    DetailComponent
  ]
})
export class MainModule { }
