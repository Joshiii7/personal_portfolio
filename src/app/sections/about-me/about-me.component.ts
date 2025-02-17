import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  @ViewChild('image', { static: true }) image!: ElementRef;
  @ViewChild('introText', { static: true }) introText!: ElementRef;
  @ViewChildren('techCard') techCards!: QueryList<ElementRef>;

  first_name: string = 'Joshi Angelo';
  last_name: string = 'Adlawan';
  institution: string = 'Andres Soriano Colleges of Bislig';
  course: string = 'Bachelor of Science in Computer Science';

  frontEndTechnologies = [
    { name: 'HTML5', icon: 'assets/svg/html-svgrepo-com.svg' },
    { name: 'CSS', icon: 'assets/svg/css-3-svgrepo-com.svg' },
    { name: 'JavaScript', icon: 'assets/svg/js-svgrepo-com.svg' },
    { name: 'Tailwind CSS', icon: 'assets/svg/tailwind-svgrepo-com.svg' },
    { name: 'Bootstrap 5', icon: 'assets/svg/bootstrap-svgrepo-com.svg' },
    { name: 'Angular', icon: 'assets/svg/angular-svgrepo-com.svg' },
    { name: 'Vue.js', icon: 'assets/svg/vue-9-logo-svgrepo-com.svg' },
    { name: 'Git', icon: 'assets/svg/git-svgrepo-com.svg' },
  ];

  backEndTechnologies = [
    { name: 'PHP', icon: 'assets/svg/php-svgrepo-com.svg' },
    { name: 'Laravel', icon: 'assets/svg/laravel-svgrepo-com.svg' },
    { name: 'MYSQL', icon: 'assets/svg/mysql-svgrepo-com.svg' },
    { name: 'Firebase', icon: 'assets/svg/firebase-svgrepo-com.svg' },
    { name: 'Git', icon: 'assets/svg/git-svgrepo-com.svg' },
  ];

  languages = [
    { name: 'JavaScript', icon: 'assets/svg/js-svgrepo-com.svg' },
    { name: 'Python', icon: 'assets/svg/python-svgrepo-com.svg' },
    { name: 'TypeScript', icon: 'assets/svg/typescript-official-svgrepo-com.svg' },
    { name: 'PHP', icon: 'assets/svg/php-svgrepo-com.svg' },
    { name: 'Java', icon: 'assets/svg/java-svgrepo-com.svg' },
  ];

  ngAfterViewInit() {
    gsap.from(this.image.nativeElement, { opacity: 0, y: 50, duration: 1, ease: "power3.out" });

    gsap.from(this.introText.nativeElement, { opacity: 0, x: -50, duration: 1, delay: 0.3, ease: "power3.out" });

    gsap.from(this.techCards.toArray(), {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6,
      ease: "power3.out",
      stagger: 0.2
    });
  }
}
