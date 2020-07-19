import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mainfooter",
  templateUrl: "./mainfooter.component.html"
})
export class MainfooterComponent implements OnInit {
  constructor() {
    console.log("Footer");
  }

  ngOnInit() {}
}
