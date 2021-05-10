import { Component, Input, OnInit } from '@angular/core';
import { EmojiEntity, parse } from 'twemoji-parser';

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss']
})
export class EmojiPickerComponent implements OnInit {

  @Input() emojis: string = "";

  emojiSources: EmojiEntity[] = []
  selected: string = ''

  constructor() { }

  ngOnInit(): void {
    this.emojiSources = parse(this.emojis)
  }

  pickEmoji(emoji: EmojiEntity) {
    this.selected = emoji.text
  }

}
