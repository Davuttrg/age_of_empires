import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  constructor(private _router: Router) { }

  tableHeaders = [{
    field: "id",
    title: "ID"
  }, {
    field: "name",
    title: "Name"
  },
  {
    field: "age",
    title: "Age"
  },
  {
    field: "costs",
    title: "Costs"
  }]

  units: {}[] = [
    { id: 1, name: "Archer", age: "Feudal", costs: "Food: 25, Gold:45" },
    { id: 2, name: "Crossbowman", age: "Castle", costs: "Food: 30, Gold:55" },
    { id: 3, name: "Arbalest", age: "Imperial", costs: "Wood: 25, Gold:40" }
  ];
  ngOnInit(): void {
  }

  handleRowClick(unit: { id: string }) {
    this._router.navigate(["units", unit.id])
  }
}
