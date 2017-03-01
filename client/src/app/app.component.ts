import { Component } from '@angular/core';
import { MessageApi } from './shared/sdk/services/custom/Message';
import { UserApi } from './shared/sdk/services/custom/User';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{result}}
    </h1>
    <input title="greeting" type="text" [(ngModel)]="inputText">
    <button (click)="doSubmit()">Greet!</button>
  `,
})
export class AppComponent {
  result = 'Enter text!';

  inputText;

  doSubmit() {
    this.messageService.greet(this.inputText)
      .subscribe(res => {
        this.result = res.greeting;
        this.inputText = '';
      });
  }

  constructor(
    public messageService: MessageApi,
    public userService: UserApi,
  ) {

  }

}
