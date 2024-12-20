import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { BlogComponent } from './features/blog/blog.component';
import { IntroductionComponent } from './features/introduction/introduction.component';
import { GalleryComponent } from './features/gallery/gallery.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent, data: { animation: 'home' }
    },
    {
        path: 'blog', component: BlogComponent, data: { animation: 'blog' }
    },
    {
        path: 'intro', component: IntroductionComponent, data: { animation: 'intro' }
    },
    {
        path: 'gallery', component: GalleryComponent, data: { animation: 'gallery' }
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    }
];
