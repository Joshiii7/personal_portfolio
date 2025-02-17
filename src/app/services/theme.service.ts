import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeKey = 'theme';

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem(this.themeKey, isDark ? 'dark' : 'light');
  }

  isDarkMode(): boolean {
    return document.documentElement.classList.contains('dark');
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }
}
