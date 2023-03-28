import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUnit } from 'src/app/interfaces/Unit';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input() tableData$!: Observable<IUnit[]>

  @Output() onRowClick = new EventEmitter<IUnit>();

  ngOnInit(): void {
  }
  handleRowClick(item: IUnit) {
    this.onRowClick.emit(item)
  }

}
