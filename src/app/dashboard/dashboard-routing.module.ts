import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { AllcontactsComponent } from "./allcontacts/allcontacts.component";
import { SheduleComponent } from "./shedule/shedule.component";
import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";
import { ThreeComponent } from "./three/three.component";
import { FourComponent } from "./four/four.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "contacts", component: AllcontactsComponent },
      { path: "scheduler", component: SheduleComponent },
      { path: "one", component: OneComponent },
      { path: "two", component: TwoComponent },
      { path: "three", component: ThreeComponent },
      { path: "four", component: FourComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
