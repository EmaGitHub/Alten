import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
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

  @Output() removePost: EventEmitter<number> = new EventEmitter();

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
    const dialogRef = this.modalService.showDetail(this.post);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.removePost.emit(result);
      }
    });
  }

  goToUserPage() {

  }
}
