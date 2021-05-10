import { Component, Input, OnInit } from '@angular/core';
import { parse } from 'twemoji-parser'

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent implements OnInit {
  @Input() emoji?: string;

  emojiSrc: string = ''

  constructor() { 
  }

  ngOnInit(): void {
    if(this.emoji) {
      const entities = parse(this.emoji);
      if(entities.length > 0) {
        this.emojiSrc = entities[0].url;
      }
    }
  }

}
