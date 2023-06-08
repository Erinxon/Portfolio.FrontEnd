import { Route } from "@angular/router";

export default [
    {
        path: 'home',
        loadChildren: () => import('./home/home.component').then(c => c.HomeComponent),
        pathMatch: 'full',
        title: 'Inicio'
    },
    {
        path: 'skills',
        loadComponent: () => import('./skills/skills.component').then(c => c.SkillsComponent),
        title: 'Habilidades'
    },
    {
        path: 'experiences',
        loadComponent: () => import('./experiences/experiences.component').then(c => c.ExperiencesComponent),
        title: 'Experiencias'
    },
    {
        path: 'projects',
        loadComponent: () => import('./projects/projects.component').then(c => c.ProjectsComponent),
        title: 'Proyectos'
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component').then(c => c.ContactComponent),
        title: 'Contacto'
    }
] as Route[];