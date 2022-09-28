import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      [ngStyle]="{
        'background-color': backgroundColor,
        color: textColor,
        cursor: 'pointer',
        padding: '15px 25px',
        'border-radius': '5px',
        border: 'none',
        'font-family': 'inherit',
        width: layout === 'block' ? '100%' : undefined
      }"
      (click)="onclick.emit()"
    >
      {{ text }}
    </button>
  `,
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() backgroundColor!: string;
  @Input() textColor!: string;
  @Input() layout: 'block' | 'normal' = 'normal';
  @Output() onclick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
