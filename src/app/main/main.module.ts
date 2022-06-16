import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ListComponent } from '../shared/components/list/list.component';
import { PostComponent } from '../shared/components/post/post.component';
import { DetailComponent } from './detail/detail.component';
import { CommonModule } from '@angular/common';
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
    UserComponent
  ],
  imports: [
      AppRoutingModule,
      CommonModule,
      SharedModule
  ],
  exports: [  ]
})
export class MainModule { }
