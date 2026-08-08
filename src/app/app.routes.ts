import { Routes } from '@angular/router';


export const routes: Routes = [

{path: 'home', loadComponent : ()=> import ('./component/home/home').then((c)=> c.Home ) , title: 'Route | Home page'},
{path: 'blog',  loadComponent : ()=> import ('./component/blog/blog').then((c)=> c.Blog)   , title: 'Route | Blog page'},
{path: 'contact', loadComponent : ()=> import ('./component/contact/contact').then((c)=> c.Contact) , title: 'Route | Contact page'},
{path: '' , redirectTo: 'home', pathMatch :'full' },

];



