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

  private isUpVote: boolean;

  constructor() {}

  ngOnInit(): void {}

  public vote() {
    this.isUpVote = !this.isUpVote;
    this.output.emit(this.isUpVote);
  }
}
