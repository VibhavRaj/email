import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
// import { LoginComponent } from "./component/login/login.component";
// import { RegisterComponent } from "./component/register/register.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  hide = true;
  constructor(public dialog: MatDialog) {}

  // login() {
  //   const dialogRef = this.dialog.open(LoginComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  // register() {
  //   const dialogRef = this.dialog.open(RegisterComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}
