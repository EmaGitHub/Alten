import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss'],
  animations: [
    trigger('boxAnimation', [
        state('false', style({
          width: '40px',
        })),
        state('true', style({
          width: '180px',
        }), { params: { height: '-20px'}}),
        transition('false => true', animate('600ms 0.3ms ease-in-out')),
        transition('true => false', animate('600ms 0.3ms ease-in-out'))
    ]),
    trigger('fadeAnimation', [
      state('false', style({
        opacity: 1
      })),
      state('true', style({
        opacity: 0
      }), ),
      transition('false => true', animate('600ms 0.3ms ease-in-out')),
      transition('true => false', animate('600ms 0.3ms ease-in-out'))
    ]),
    trigger('fadeInverseAnimation', [
      state('false', style({
        opacity: 1
      })),
      state('true', style({
        opacity: 0
      }), ),
      transition('false => true', animate('600ms 0.3ms ease-in-out')),
      transition('true => false', animate('600ms 0.3ms ease-in-out'))
    ]),
  ]
})
export class FilterBoxComponent {

  @ViewChild("input") filterSearch?: ElementRef;
  @Output() filter: EventEmitter<string> = new EventEmitter();
  flt = '';
  opened = 'false';

  colorSelected = '#ff0000';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.themeChangeSubjectAsObservable.subscribe(
      (color: string) => {
        this.colorSelected = color;
      }
    )
  }
  
  applyFilter(filterValue: string): void {
    this.filter.emit(filterValue);
    this.flt = filterValue;
  }

  resetFilter(inside?: boolean): void {
    this.filterSearch!.nativeElement.value = "";
    if (!inside) {
      this.opened = 'false';
    }
    this.flt = '';
    this.filter.emit(this.flt);
  }

  focus(): void {
    this.opened = 'true';
    this.filterSearch!.nativeElement.focus();
  }

  focusOut(): void {
    if (this.filterSearch!.nativeElement.value.length === 0) {
      this.opened = 'false';
    }
  }
}
