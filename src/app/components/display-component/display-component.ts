import { Component } from '@angular/core';

@Component({
  selector: 'display-component',
  templateUrl: './display-component.html',
})
export class DisplayComponent {
  public yesAnwser = 'yes, it is my apple';
  public noAnswer = 'No, it is not my apple';
  public question = 'Is this your apple?';
  public isUpVote: boolean = null;

  output(evt: boolean) {
    this.isUpVote = evt
  }
}
