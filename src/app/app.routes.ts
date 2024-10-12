import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BlogComponent } from './features/blog/blog.component';
import { IntroductionComponent } from './features/introduction/introduction.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'blog', component: BlogComponent
    },
    {
        path: 'intro', component: IntroductionComponent
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    }
];
