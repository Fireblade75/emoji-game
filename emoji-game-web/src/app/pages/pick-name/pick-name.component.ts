import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Avatar } from 'src/app/model/avatar';

@Component({
  selector: 'app-pick-name',
  templateUrl: './pick-name.component.html',
  styleUrls: ['./pick-name.component.scss']
})
export class PickNameComponent implements OnInit {

  avatars: Avatar[] = []
  error = ''

  nameForm = new FormGroup({
    emoji: new FormControl(''),
    name: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  selectName() {
    this.avatars.push({
      name: this.nameForm.value.name,
      emoji: this.nameForm.value.emoji
    })
    console.log(this.nameForm.value)
    // this.error = 'Name unavailable'
  }
}
