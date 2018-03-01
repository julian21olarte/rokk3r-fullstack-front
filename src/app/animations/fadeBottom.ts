import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeBottom =
  trigger('fadeBottom', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(20%)'
      }),
      animate('300ms ease-in',
        style({
          opacity: 1,
          transform: 'translateY(0)'
        })
      )
    ])
  ]);