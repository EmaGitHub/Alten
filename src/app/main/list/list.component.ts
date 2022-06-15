import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { HttpMockService } from 'src/app/core/services/http-mock.service';
import { SpinnerService } from 'src/app/core/services/spinner-service';
import { Post } from 'src/app/interfaces/post.interface';
import { User } from 'src/app/interfaces/user.interface';
import { listAnimation } from 'src/app/shared/animations/list-animation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [listAnimation]
})
export class ListComponent implements OnInit {

  posts: Post[] = []; 
  users: User[] = [];

  show: boolean = false;

  constructor(private httpMockService: HttpMockService, private spinnerService: SpinnerService) { }

  ngOnInit(): void {  }

  getData() {
    this.posts = [];
    this.users = [];
    this.spinnerService.start("Loading");
    let call1 = this.httpMockService.getPosts();
    let call2 = this.httpMockService.getUsers()
    forkJoin([call1, call2]).subscribe(
      ( result: [posts: Post[], users: User[]]) => {
        this.posts = result[0];
        this.users = result[1];
        this.associateUsername();
        this.spinnerService.stop();
      }
    )
  }

  associateUsername() {
    for (let i = 0; i < this.posts.length; i++) {
      let u: User = this.users.filter(u => u.id == this.posts[i].userId)[0];
      this.posts[i].user = u.name;
    }
  }
}
