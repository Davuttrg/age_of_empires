import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-filter',
  templateUrl: './cost-filter.component.html',
  styleUrls: ['./cost-filter.component.scss']
})
export class CostFilterComponent implements OnInit {

  constructor() { }

  costs = [{
    key: "wood",
    title: "Wood",
    is_checked: false,
    range: {
      min: 0,
      max: 50
    },
  },
  {
    key: "food",
    title: "Food",
    is_checked: false,
    range: {
      min: 20,
      max: 100
    },
  },
  {
    key: "wood",
    title: "Wood",
    is_checked: false,
    range: {
      min: 50,
      max: 60
    },
  }
  ]
  ngOnInit(): void {
  }

}
