import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html"
})
export class NavComponent implements OnInit {
  constructor() {
    console.log("Navdash");
  }

  ngOnInit() {}
}
