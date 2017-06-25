import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { PushNotificationsService } from '../../shared/services/push-notifications.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'chat',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements AfterViewInit {
  private readonly TIME_TO_REQUEST_PUSH = 5000;

  constructor(
              private pushService: PushNotificationsService) {
  }

  ngAfterViewInit(): void {
    Observable.fromEvent(window, 'resize').subscribe(() => this.modifySidenavToSize());

    setTimeout(() => this.pushService.initPushNotification(), this.TIME_TO_REQUEST_PUSH);
  }

  modifySidenavToSize() {
    // if (window.innerWidth < 767) {
    //   if (!this.menuCtrl.isEnabled()) {
    //     this.menuCtrl.enable(true);
    //   }
    // }
    // else {
    //   if (this.menuCtrl.isEnabled()) {
    //     this.menuCtrl.enable(false);
    //   }
    // }
  }
}
