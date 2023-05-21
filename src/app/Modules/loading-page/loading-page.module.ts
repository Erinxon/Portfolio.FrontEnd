import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { LoadingPageComponent } from './loading-page.component';
import { LoadingPageRoutingModule } from './loading-page-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoadingPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoadingPageRoutingModule,
    SharedModule
  ]
})
export class LoadingPageModule { }
