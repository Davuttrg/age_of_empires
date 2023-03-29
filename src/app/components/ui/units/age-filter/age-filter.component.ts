import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-age-filter',
  templateUrl: './age-filter.component.html',
  styleUrls: ['./age-filter.component.scss']
})
export class AgeFilterComponent implements OnInit {

  constructor() { }

  ages: { title: string, value: string }[] = [{
    title: "All",
    value: ""
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

  @Input() selectedAge!: string;
  @Output() onClickAge: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }
  handleClickAge(age: string) {
    this.selectedAge = age;
    this.onClickAge.emit(age)
  }

}
