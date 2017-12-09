import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { LightsComponent } from './lights/lights.component';
import { LightDetailComponent } from './light-detail/light-detail.component';
import { LightService } from './light.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LightsComponent,
    LightDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LightService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
