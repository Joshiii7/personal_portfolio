import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent {
  currentTab: number = 1;

  applicationProjects = [
    { 
        title: 'Business Permit and Licensing System', 
        description: 'A web application built with Laravel and Angular, styled using Tailwind CSS.', 
        image: 'assets/web_project_images/bpls.png', 
        link: 'https://bisligcitybpls.com/' 
    },
    { 
        title: 'ASCB DTR and Payroll System', 
        description: 'A payroll and timekeeping system developed using Laravel and Angular, with a modern UI powered by Tailwind CSS.', 
        image: 'assets/web_project_images/payroll_system.png', 
        link: 'https://ascbdtrandpayrollsystem.com/' 
    },
    { 
        title: 'Bislig City Car Rental', 
        description: 'A car rental management platform built with Laravel and Angular, featuring a responsive Tailwind CSS design.', 
        image: 'assets/web_project_images/car_rental.png', 
        link: 'https://bisligcitycarrental.com/' 
    }
  ];

  miniCSSProjects = [
    { title: 'Rubic\'s Cube', description: 'A simple CSS portfolio page.', image: 'assets/css_images/rubics.png' },
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
