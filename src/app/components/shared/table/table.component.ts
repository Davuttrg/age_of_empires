import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input() tableHeaders: {
    field: string,
    title: string
  }[] = []

  @Input() tableData: any[] = []
  @Output() onRowClick = new EventEmitter<any>()

  ngOnInit(): void {
  }
  handleRowClick(item: {}) {
    this.onRowClick.emit(item)
  }

}
