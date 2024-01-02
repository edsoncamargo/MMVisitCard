import { Component } from '@angular/core';
import { ThemesService } from 'src/app/services/themes/themes.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent {

  currentTheme: string = "";
  invertedTheme: string = "";

  constructor(private themeService: ThemesService) {
    this.invertThemeClass();
  }

  invertThemeClass() {
    this.currentTheme = this.themeService.getCurrentTheme();
    // console.log(this.currentTheme);
    this.invertedTheme = this.currentTheme === "mm-red-theme" ? "mm-blue-theme" : "mm-red-theme";
  }

  handleInvertTheme() {
    this.themeService.setTheme(this.invertedTheme);
    this.invertThemeClass();
  }
}
