import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('opened', style({
        height: '150px',
        opacity: 1,
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
      })),
      transition('* => closed', [
        animate('.5s')
      ]),
      transition('* => opened', [
        animate('.5s')
      ]),
    ]),
  ]
})
export class NavbarComponent implements OnInit {

  @Input() title: string;
  state = 'closed';
  visible = false;

  colorSelected;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.themeChangeSubjectAsObservable.subscribe(
      (color: string) => {
        this.colorSelected = color;
      }
    )
  }

  openSettings() {
    if (this.state == 'closed') {
      this.state = 'opened';
      setTimeout(() => {
        this.visible = true;
      }, 500);
    } else {
      this.state = 'closed';
      this.visible = false;
    }
  }

  selectColor(color: string) {
    this.themeService.nextColorChange(color);
    this.state = 'closed';
    this.visible = false;
  }

}
