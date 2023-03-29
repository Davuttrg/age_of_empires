import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilterCost } from 'src/app/pages/units/filter.reducer';

interface IFormCost {
  key: string,
  title: string,
  is_checked: boolean,
  range: number
}
@Component({
  selector: 'app-cost-filter',
  templateUrl: './cost-filter.component.html',
  styleUrls: ['./cost-filter.component.scss']
})
export class CostFilterComponent implements OnInit {

  constructor() { }

  costs: IFormCost[] = [{
    key: "wood",
    title: "Wood",
    is_checked: false,
    range: 0
  },
  {
    key: "food",
    title: "Food",
    is_checked: false,
    range: 0
  },
  {
    key: "gold",
    title: "Gold",
    is_checked: false,
    range: 0
  }]

  @Output() onUpdateFilter: EventEmitter<IFilterCost[]> = new EventEmitter()
  @Input() selectedCosts: IFilterCost[] = []
  ngOnInit(): void {
  }

  getCostsBySelected(costs: IFormCost[]) {
    return costs.map((cost) => {
      const good = this.selectedCosts.find((item) => item.good.toLowerCase() == cost.key);
      return {
        ...cost,
        is_checked: !!good,
        range: good?.range || 0
      }
    })
  }

  handleCheckCost(cost: IFormCost) {
    const newFilter = Object.assign([], this.selectedCosts) as IFilterCost[]

    const existCostIndex = newFilter.findIndex((item) => item.good.toLowerCase() == cost.key);

    if (existCostIndex < 0) { // -1 is not found
      newFilter.push({ good: cost.title, range: 0 })
    }
    else newFilter.splice(existCostIndex, 1)

    this.onUpdateFilter.emit(newFilter)
  }

  rangeChange(range: number, key: string) {
    let index = this.selectedCosts.findIndex((item) => item.good.toLowerCase() == key);

    this.selectedCosts = JSON.parse(JSON.stringify(this.selectedCosts))
    this.selectedCosts[index].range = range
    
    this.onUpdateFilter.emit(this.selectedCosts)
  }
}
