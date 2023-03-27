import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-filter',
  templateUrl: './age-filter.component.html',
  styleUrls: ['./age-filter.component.scss']
})
export class AgeFilterComponent implements OnInit {

  constructor() { }

  ages: { name: string, value: string }[] = [{
    name: "All",
    value: "all"
  },
  {
    name: "Dark",
    value: "dark"
  },
  {
    name: "Feudal",
    value: "feudal"
  },
  {
    name: "Castle",
    value: "castle"
  },
  {
    name: "Imperial",
    value: "imperial"
  }]
  selectedAge: string = "all"

  ngOnInit(): void {
  }

}
