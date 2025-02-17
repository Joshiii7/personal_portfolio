import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
	experiences = [
		// Provincial
		{
			id: 1,
			position: 'Gold Medalist',
			event: 'Provincial Skills Competition 2023',
			duration: 'November 2023',
			skillArea: 'Web Technologies',
			description: 'Won 1st place in the Provincial Skills Competition, advancing to the Regional level.',
			image: 'assets/images/provincial/image_3.jpg',
			uuid: 'provincial-skills-competition',
		},
		// Regional
		{
			id: 2,
			position: 'Gold Medalist',
			event: 'Regional Skills Competition 2023',
			duration: 'December 2023',
			skillArea: 'Web Technologies',
			description: 'Secured the gold medal in the Regional Skills Competition, earning a spot in the National Skills Competition.',
			image: 'assets/images/regional/image_3.jpg',
			uuid: 'regional-skills-competition',
		},
		// National
		{
			id: 3,
			position: 'Silver Medalist',
			event: 'Philippine National Skills Competition 2024',
			duration: 'August 2024',
			skillArea: 'Web Technologies',
			description: 'Represented CARAGA Region in the National Skills Competition and won the silver medal. Earned a spot in the ASEAN Skills Competition 2025, advancing to the international level.',
			image: 'assets/images/national/image_5.jpg',
			uuid: 'national-skills-competition',
		}
	];

	constructor(private router: Router) {  }

	navigate(id: number) {
		// alert(id);
		const experience = this.experiences.find((ele: any) => ele.id === id);

		if (experience) {
			this.router.navigate(['experience-detail', experience.uuid]);
		}

	}
}
