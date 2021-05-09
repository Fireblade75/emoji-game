import { Component, OnInit } from '@angular/core';
import Cat from 'src/app/model/cat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cat-page',
  templateUrl: './cat-page.component.html',
  styleUrls: ['./cat-page.component.scss']
})
export class CatPageComponent implements OnInit {

  constructor(private catService: CatService) { }

  cats: Cat[] = []

  ngOnInit(): void {
    this.catService.getCats()
      .subscribe((remoteCats) => {
        this.cats = remoteCats
      })
  }

  getCats() {

  }

}
