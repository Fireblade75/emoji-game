import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CatPageComponent } from './pages/cat-page/cat-page.component';
import { EmojiComponent } from './components/emoji/emoji.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { PickNameComponent } from './pages/pick-name/pick-name.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { EmojiPickerComponent } from './components/emoji-picker/emoji-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CatPageComponent,
    EmojiComponent,
    PickNameComponent,
    AvatarComponent,
    EmojiPickerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
