import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { ContactMeComponent } from './sections/contact-me/contact-me.component';
import { MyProjectsComponent } from './sections/my-projects/my-projects.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ExperienceDetailComponent } from './pages/experience-detail/experience-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    HeroSectionComponent,
    AboutMeComponent,
    ContactMeComponent,
    MyProjectsComponent,
    ExperienceComponent,
    ExperienceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
