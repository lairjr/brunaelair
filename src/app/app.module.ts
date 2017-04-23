import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConfirmationComponent } from './confirmation/component';
import { HoneyMoonComponent } from './honeymoon/component';
import { HomeComponent } from './home/component';
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

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
    HomeComponent,
    HoneyMoonComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
