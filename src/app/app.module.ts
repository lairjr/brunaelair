import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';
import { ConfirmationComponent } from './confirmation/component';
import { HoneyMoonComponent } from './honeymoon/component';
import { HomeComponent } from './home/component';
import { LocationComponent } from './location/component';
import { TipsComponent } from './tips/component';

const appRoutes: Routes = [
  {
    path: 'honeymoon',
    component: HoneyMoonComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'tips',
    component: TipsComponent
  },
  { path: '',
    component: HomeComponent
  },
  { path: '**',
    redirectTo: ''
  }
];

const firebaseConfig = {
  apiKey: 'AIzaSyDGlkrOrRMsVslkzwUI_qX6syQnhY_3Uz4',
  authDomain: 'casamento-dev-cd357.firebaseapp.com',
  databaseURL: 'https://casamento-dev-cd357.firebaseio.com/',
  projectId: 'casamento-dev-cd357',
  storageBucket: 'casamento-dev-cd357.appspot.com',
  messagingSenderId: '1033912113464'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
    HomeComponent,
    HoneyMoonComponent,
    LocationComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
