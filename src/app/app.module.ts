import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot({
          resourceServer: {
              allowedUrls: ['http://localhost:9090/api'],
              sendAccessToken: true
          }
    }),
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
  
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Tells Angular we will have custom tags in our templates
  ]
})
export class AppModule { }