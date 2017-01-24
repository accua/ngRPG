import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PlayerCreateComponent } from './player-create/player-create.component';
import { ScenarioComponent } from './scenario/scenario.component';
import {MaterializeDirective} from "angular2-materialize";

@NgModule({
  declarations: [
    AppComponent,
    PlayerCreateComponent,
    ScenarioComponent,
    MaterializeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
