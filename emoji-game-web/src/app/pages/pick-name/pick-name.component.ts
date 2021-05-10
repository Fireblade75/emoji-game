import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pick-name',
  templateUrl: './pick-name.component.html',
  styleUrls: ['./pick-name.component.scss']
})
export class PickNameComponent implements OnInit {

  error = ''

  nameForm = new FormGroup({
    gamePin: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  selectName() {
    this.error = 'Name unavailable'
  }
}
