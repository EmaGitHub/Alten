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

  filterValue: string = "";
  filteredPosts: Post[] = [];

  constructor(private httpMockService: HttpMockService, private spinnerService: SpinnerService) { }

  ngOnInit(): void { 
    this.getData();
   }

  getData() {
    this.spinnerService.start("Loading");
    let call1 = this.httpMockService.getPosts();
    let call2 = this.httpMockService.getUsers()
    forkJoin([call1, call2]).subscribe(
      ( result: [posts: Post[], users: User[]]) => {
        this.posts = result[0];
        this.filteredPosts = result[0];
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

  filterChanged() {
    this.filteredPosts = [];
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].title.toUpperCase().includes(this.filterValue.toUpperCase()) || 
          this.posts[i].body.toUpperCase().includes(this.filterValue.toUpperCase()) ||
          this.posts[i].user.toUpperCase().includes(this.filterValue.toUpperCase())) {
            this.filteredPosts.push(this.posts[i]);
        }
    }
  }

  resetFilter() {
    this.filterValue = '';
    this.filteredPosts = this.posts;
  }

  delete(id: number) {
    this.filteredPosts = this.filteredPosts.filter(p => p.id != id);
  }
}
