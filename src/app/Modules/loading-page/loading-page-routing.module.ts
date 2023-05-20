import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingPageComponent } from './loading-page.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoadingPageComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'skills',
        component: SkillsComponent,
      },
      {
        path: 'experiences',
        component: ExperiencesComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingPageRoutingModule { }
