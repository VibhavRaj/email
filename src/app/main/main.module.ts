import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../theme/material/material.module";
import { HomeComponent } from "./home/home.component";
import { MainfooterComponent } from "./mainfooter/mainfooter.component";
import { PricingComponent } from "./pricing/pricing.component";
import { RegisterComponent } from "../component/register/register.component";
import { DoneComponent } from "../component/done/done.component";
import { IndexComponent } from "./index/index.component";
import { LoginuserComponent } from "./loginuser/loginuser.component";

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    MainfooterComponent,
    PricingComponent,
    LoginuserComponent,
    RegisterComponent,
    DoneComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [LoginuserComponent, RegisterComponent, DoneComponent]
})
export class MainModule {}
