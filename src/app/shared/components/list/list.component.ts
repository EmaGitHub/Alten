import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { listAnimation } from 'src/app/shared/animations/list-animation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [listAnimation]
})
export class ListComponent {

  @Input() posts: Post[] = []; 

  @Output() removePost: EventEmitter<number> = new EventEmitter();

  delete(id: number) {
    this.removePost.emit(id);
  }
}
