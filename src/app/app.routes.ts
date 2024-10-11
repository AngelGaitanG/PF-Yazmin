import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BlogComponent } from './features/blog/blog.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'blog', component: BlogComponent
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    }
];
