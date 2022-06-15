import { Component, Input, SimpleChange } from '@angular/core';
import { ModalMessageService } from 'src/app/core/services/modal-service';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() post: Post;
  initials: string = "";

  constructor(private modalService: ModalMessageService) { }

  ngOnChanges(change: SimpleChange) {
    if (this.post.user) {
      let s = this.post.user.split(" ");
      for (let i = 0; i < s.length; i++) {
        this.initials = this.initials + s[i][0] + " ";
      }
      this.initials.slice(0, -1);
    }
  }

  openDetail() {
    this.modalService.showDetail("aaa");
  }

}
