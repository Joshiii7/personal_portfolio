import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = '@joshiangelo';
  isDarkMode: boolean = false;
  activeSection: string = '';

  navItems = [
    { label: 'About', section: 'about', icon: 'assets/svg/about-icon.svg' },
    { label: 'Experience', section: 'experience', icon: 'assets/svg/experience-icon.svg' },
    { label: 'Projects', section: 'projects', icon: 'assets/svg/projects-svgrepo-com.svg' },
    { label: 'Contact', section: 'contact', icon: 'assets/svg/contact-icon.svg' }
  ];

  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  ngOnInit(): void {
    this.observeSections();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleTheme();
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = sectionId;
    }
  }

  observeSections() {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    this.navItems.forEach(item => {
      const section = document.getElementById(item.section);
      if (section) {
        observer.observe(section);
      }
    });
  }
}
