import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  error = ''

  gameForm = new FormGroup({
    gamePin: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  joinGame() {
    this.error = 'Game not found'
  }
}
