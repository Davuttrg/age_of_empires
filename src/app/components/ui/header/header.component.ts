import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  links: { path: string, title: string }[] = [{
    path: "",
    title: "Home"
  }, {
    path: "/units",
    title: "Units"
  }]

  ngOnInit(): void {
  }

}
