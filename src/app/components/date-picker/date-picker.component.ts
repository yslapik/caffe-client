import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  date = new Date(new Date().getTime());
  testForm : FormGroup = new FormGroup({
    date:new FormControl(this.date),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
