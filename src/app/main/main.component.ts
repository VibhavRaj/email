import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { RegisterComponent } from "../component/register/register.component";
import { LoginuserComponent } from "./loginuser/loginuser.component";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  constructor(public dialog: MatDialog) {
    console.log("Homepage");
  }
  ngOnInit() {}
  login() {
    const dialogRef = this.dialog.open(LoginuserComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  register() {
    const dialogRef = this.dialog.open(RegisterComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
