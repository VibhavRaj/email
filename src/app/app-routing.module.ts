import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavigaComponent } from "./naviga/naviga.component";
// import { ShedulerComponent } from "./component/sheduler/sheduler.component";
// import { ContactComponent } from "./component/contact/contact.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./main/main.module").then(m => m.MainModule)
  },
  {
    path: "",
    loadChildren: () =>
      import("./component/component.module").then(m => m.ComponentModule)
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  { path: "navi", component: NavigaComponent }
  // { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
