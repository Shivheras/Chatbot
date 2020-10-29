import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat-bot/chat/chat.component';
import { MainComponent } from './chat-bot/main/main.component';

const routes: Routes = [

  
  
  {path:'', component: ChatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
