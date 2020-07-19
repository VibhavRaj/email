import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main.component";
import { IndexComponent } from "./index/index.component";
import { HomeComponent } from "./home/home.component";
import { PricingComponent } from "./pricing/pricing.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "", component: IndexComponent },
      { path: "features", component: HomeComponent },
      { path: "pricing", component: PricingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
