import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { HttpMockService } from 'src/app/core/services/http-mock.service';
import { SpinnerService } from 'src/app/core/services/spinner-service';
import { Post } from 'src/app/interfaces/post.interface';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  filterChanged(value: string) {
    this.filterValue = value;
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
    this.posts = this.posts.filter(p => p.id != id);
    this.filteredPosts = this.filteredPosts.filter(p => p.id != id);
  }

}
