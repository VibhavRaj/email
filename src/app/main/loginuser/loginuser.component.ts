import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-loginuser",
  templateUrl: "./loginuser.component.html"
})
export class LoginuserComponent implements OnInit {
  constructor(private router: Router) {
    console.log("Login component");
  }

  ngOnInit() {}
  loginsubmit() {
    this.router.navigate(["/dashboard"]);
  }
}
