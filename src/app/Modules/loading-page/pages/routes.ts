import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SkillsComponent } from "./skills/skills.component";
import { ExperiencesComponent } from "./experiences/experiences.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";

export default [
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
] as Route[];