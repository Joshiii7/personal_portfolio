import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ExperienceDetailComponent } from './pages/experience-detail/experience-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'experience-detail/:uuid',
    component: ExperienceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
