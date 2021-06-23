import {Component} from '@angular/core';

import {lorem} from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  textInput = '';
  winningNumber = 0;

  detectTextInput(value: string) {
    this.textInput = value;
  }

  compare(randomLetter: string, inputLetter: string) {
    if (!inputLetter) {
      return 'pending';
    }
    return randomLetter === inputLetter ? 'correct' : 'incorrect';
  }

}


