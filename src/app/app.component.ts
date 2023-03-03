import { Component } from '@angular/core';
import { initialize } from '@devcycle/devcycle-js-sdk'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng14';
  dvcClient = initialize('client-ed2daf14-82d5-47f6-8a73-a5c298546efa', { user_id: '123' });

  ngOnInit() {
    this.dvcClient.onClientInitialized().then(() => {
      const featureToggle = this.dvcClient.variable('fadsfsad', false)
      if (featureToggle.value) {
          this.title = "got it"
          console.log("got it")
      } else {
          this.title = "don't got it"
          console.log("don't got it")
      }
      featureToggle.onUpdate(() => {
        if (featureToggle.value) {
          this.title = "got it"
        } else {
          this.title = "don't got it"
        }
      })
    })
  }
}
