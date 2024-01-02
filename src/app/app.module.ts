import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontOfCardComponent } from './views/front-of-card/front-of-card.component';
import { BackOfCardComponent } from './views/back-of-card/back-of-card.component';
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';
import { ThemesService } from './services/themes/themes.service';
import { CorenComponent } from './components/coren/coren.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontOfCardComponent,
    BackOfCardComponent,
    ThemeSwitchComponent,
    CorenComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ThemesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
