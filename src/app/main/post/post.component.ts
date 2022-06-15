import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { ModalMessageService } from 'src/app/core/services/modal-service';
import { ThemeService } from 'src/app/core/services/theme.service';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  initials: string = "";

  @Output() removePost: EventEmitter<number> = new EventEmitter();

  colorSelected: string;

  constructor(private modalService: ModalMessageService, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.themeChangeSubjectAsObservable.subscribe(
      (color: string) => {
        this.colorSelected = color;
      }
    )
  }

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
