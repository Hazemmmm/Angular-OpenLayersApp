import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Output() sliderEvent: EventEmitter<number> = new EventEmitter<number>();
  // @Input() count = 0.5;
  constructor() {}

  ngOnInit(): void {}

  sliderHandler(value: any) {
    console.log(value);
    this.sliderEvent.emit(value);
  }

  getSliderChangeEmitter() {
    return this.sliderEvent;
  }
}
