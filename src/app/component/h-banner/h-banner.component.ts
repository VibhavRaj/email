import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-h-banner",
  templateUrl: "./h-banner.component.html",
  styleUrls: ["./h-banner.component.css"]
})
export class HBannerComponent implements OnInit {
  constructor() {
    console.log("H-banner");
  }

  ngOnInit() {}
}
