import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor() { }

  getCurrentTheme(): string {
    const themeClasses = [].slice.call(document.getElementById("mm-main")?.classList);
    const currentTheme = themeClasses.filter((className: string) => className.includes("red-theme") || className.includes("blue-theme"))
    return String(currentTheme);
  }

  setTheme(themeClass: string) {
    const eTheme = document.getElementById("mm-main");
    eTheme?.classList.remove("mm-red-theme");
    eTheme?.classList.remove("mm-blue-theme");
    eTheme?.classList.add(themeClass);
  }
}
