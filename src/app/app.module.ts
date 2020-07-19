import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./theme/material/material.module";
import { LoginComponent } from "./component/login/login.component";
import { RegisterComponent } from "./component/register/register.component";
import { AlldataComponent } from "./component/alldata/alldata.component";
import { NavComponent } from "./component/nav/nav.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShedulerComponent } from "./component/sheduler/sheduler.component";
import { ContactComponent } from "./component/contact/contact.component";
import { DoneComponent } from "./component/done/done.component";
import { WrongComponent } from "./component/wrong/wrong.component";
import { HBannerComponent } from "./component/h-banner/h-banner.component";
import { BlogComponent } from "./component/blog/blog.component";
import { HomeComponent } from "./main/home/home.component";
import { NavigationComponent } from "./main/navigation/navigation.component";
import { NavigaComponent } from './naviga/naviga.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    NavigaComponent
    //LoginComponent
    // RegisterComponent,
    // AlldataComponent,
    // NavComponent,
    // ShedulerComponent,
    // ContactComponent,
    // DoneComponent,
    // WrongComponent,
    // HBannerComponent,
    // BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
    // FormsModule,
    // ReactiveFormsModule
  ],
  // entryComponents: [LoginComponent, RegisterComponent, DoneComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
