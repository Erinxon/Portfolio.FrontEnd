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
        pathMatch: 'full',
        title: 'Inicio'
      },
      {
        path: 'skills',
        component: SkillsComponent,
        title: 'Habilidades'
      },
      {
        path: 'experiences',
        component: ExperiencesComponent,
        title: 'Experiencias'
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Proyectos'
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Contacto'
      }
    ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingPageRoutingModule { }
