import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpMockService } from 'src/app/core/services/http-mock.service';
import { SpinnerService } from 'src/app/core/services/spinner-service';
import { User } from 'src/app/interfaces/user.interface';
import { forkJoin } from 'rxjs';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;
  posts: Post[];

  constructor(private httpMockService: HttpMockService, private spinnerService: SpinnerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.spinnerService.start("Loading");
    let call1 = this.httpMockService.getPosts();
    let call2 = this.httpMockService.getUsers()
    forkJoin([call1, call2]).subscribe(
      ( result: [posts: Post[], users: User[]]) => {
        this.posts = result[0].filter(p => p.userId == this.route.snapshot.params['id']);
        this.user = result[1].filter(u => u.id == this.route.snapshot.params['id'])[0];
        this.spinnerService.stop();
      }
    )
  }

}
