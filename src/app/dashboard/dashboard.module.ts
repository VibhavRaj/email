import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { MaterialModule } from "../theme/material/material.module";
import { MenuComponent } from "./menu/menu.component";
import { AllcontactsComponent } from "./allcontacts/allcontacts.component";
import { SheduleComponent } from "./shedule/shedule.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
    AllcontactsComponent,
    SheduleComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: []
})
export class DashboardModule {}
