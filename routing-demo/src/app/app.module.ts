import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { InternetConnectivityComponent } from './internet-connectivity/internet-connectivity.component';
import { ConnectivityService } from './connectivity.service';
import { ConnectivityComponent } from './connectivity/connectivity.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent,
    InternetConnectivityComponent,
    ConnectivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConnectivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }

