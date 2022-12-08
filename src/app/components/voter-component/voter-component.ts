import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'voter-component',
  templateUrl: './voter-component.html',
})
export class VoterComponent implements OnInit {
  @Input() question: string;
  @Input() yesAnwser: string;
  @Input() noAnswer: string;
  @Output() output = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  public vote(result: boolean) {
    this.output.emit(result);
  }
}
