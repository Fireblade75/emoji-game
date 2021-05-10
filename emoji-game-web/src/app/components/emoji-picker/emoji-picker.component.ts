import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EmojiEntity, parse } from 'twemoji-parser';

@Component({
  selector: 'app-emoji-picker',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EmojiPickerComponent),
    multi: true
  }],
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss']
})
export class EmojiPickerComponent implements OnInit, ControlValueAccessor {

  @Input() emojis: string = "";

  emojiSources: EmojiEntity[] = []
  selected: string = ''

  propagateChange = (_: any) => {};
  propagateTouched = (_: any) => {};

  constructor() { }

  ngOnInit(): void {
    this.emojiSources = parse(this.emojis)
  }

  pickEmoji(emoji: EmojiEntity) {
    if(this.selected !== emoji.text) {
      this.selected = emoji.text
      this.propagateChange(this.selected)
    }
    this.propagateTouched(this.selected)
  }

  writeValue(value: string): void {
    if(value !== undefined) {
      this.selected = this.selected;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }
}
