import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { GlobalService } from './global.service';
import { FulldetailComponent } from './fulldetail/fulldetail.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';
import { LastdataComponent } from './lastdata/lastdata.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    FulldetailComponent,
    MainComponent,
    LastdataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database

  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
