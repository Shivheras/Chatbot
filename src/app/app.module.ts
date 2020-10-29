import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat-bot/chat/chat.component';
import { MainComponent } from './chat-bot/main/main.component';

import {ChatBotModule} from './chat-bot/chat-bot.module';
@NgModule({
  declarations: [
    AppComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChatBotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
