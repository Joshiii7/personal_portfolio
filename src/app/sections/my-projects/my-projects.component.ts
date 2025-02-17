import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent {
  currentTab: number = 1;

  applicationProjects = [
    { title: 'Web Application 1', description: 'A web application built with Angular.', image: 'assets/project1.jpg' },
    { title: 'E-Commerce Platform', description: 'A full-stack e-commerce platform built with React and Node.js.', image: 'assets/project2.jpg' },
    { title: 'Task Manager App', description: 'A task management app using Laravel and Vue.js.', image: 'assets/project3.jpg' },
  ];

  miniCSSProjects = [
    { title: 'Portfolio Page', description: 'A simple CSS portfolio page.', image: 'assets/cssproject1.jpg' },
    { title: 'Landing Page', description: 'A responsive landing page built with CSS Grid and Flexbox.', image: 'assets/cssproject2.jpg' },
    { title: 'Blog Layout', description: 'A blog layout with CSS animations.', image: 'assets/cssproject3.jpg' },
  ];

  jsProjects = [
    { title: 'Weather App', description: 'A JavaScript weather app using an API.', image: 'assets/jsproject1.jpg' },
    { title: 'Calculator', description: 'A basic calculator built with JavaScript.', image: 'assets/jsproject2.jpg' },
    { title: 'Quiz Game', description: 'A quiz game app created with vanilla JavaScript.', image: 'assets/jsproject3.jpg' },
  ];

  tabIndex(tabNumber: number): void {
    this.currentTab = tabNumber;
  }
}
