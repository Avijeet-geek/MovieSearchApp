import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FulldetailComponent } from './fulldetail/fulldetail.component';
import { LastdataComponent } from './lastdata/lastdata.component';

// import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: 'full/:id/:info', component: FulldetailComponent },
  { path: 'last/:id/:info', component: LastdataComponent },
  { path: '', component: MainComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
