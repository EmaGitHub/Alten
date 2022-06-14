import { trigger, transition, query, style, stagger, animate } from "@angular/animations";

export const listAnimation = trigger('listAnimation', [
    transition('* <=> *', [
      query(':enter',
        [
            style({ opacity: 0, left: "200px" }), 
            stagger('60ms', animate('600ms ease-out', style({ opacity: 1, left: 0 })
            ))],
        { optional: true }
      ),
      query(':leave',
        animate('400ms', style({ opacity: 0 })),
        { optional: true}
      )
    ])
  ]);