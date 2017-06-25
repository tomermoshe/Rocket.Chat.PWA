import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getApolloClient } from '../graphql/client/apollo-client';
import { ApolloModule } from 'apollo-angular';
import { FormsModule } from '@angular/forms';
import { UnixTimeToStringPipe } from '../../pipes/unix-time-to-string';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PushNotificationsService } from './services/push-notifications.service';
import { LoginPageService } from './services/login-page.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdInputModule,
  MdListModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ServiceWorkerModule,
    ApolloModule.forRoot(getApolloClient),
    BrowserAnimationsModule,
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdInputModule,
    MdSnackBarModule,
    MdCardModule,
    MdListModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ApolloModule,
    UnixTimeToStringPipe,
    BrowserAnimationsModule,
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdInputModule,
    MdSnackBarModule,
    MdCardModule,
    MdListModule,
  ],
  declarations: [UnixTimeToStringPipe],
  providers: [PushNotificationsService, LoginPageService],
})
export class SharedModule {
}
