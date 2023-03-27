import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-filter',
  templateUrl: './age-filter.component.html',
  styleUrls: ['./age-filter.component.scss']
})
export class AgeFilterComponent implements OnInit {

  constructor() { }

  ages: { title: string, value: string }[] = [{
    title: "All",
    value: "all"
  },
  {
    title: "Dark",
    value: "dark"
  },
  {
    title: "Feudal",
    value: "feudal"
  },
  {
    title: "Castle",
    value: "castle"
  },
  {
    title: "Imperial",
    value: "imperial"
  }]
  selectedAge: string = "all"

  ngOnInit(): void {
  }

}
