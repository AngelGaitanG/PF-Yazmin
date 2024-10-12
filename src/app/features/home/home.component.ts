import { Component } from '@angular/core';
import { IHomeCard } from '../../core/interfaces/home-card.interface';
import { NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private readonly router: Router
  ){}

  cards :IHomeCard[] = [
    {
      button: "BLOG",
      alt: "blog",
      src: "../../../assets/images/blog.jpg",
      link: "blog"
    },
    {
      button: "GALLERY",
      alt: "gallery",
      src: "../../../assets/images/gallery.jpg",
      link: "gallery"
    },
    {
      button: "INTRODUCCION",
      alt: "introduccion",
      src: "../../../assets/images/introduction.jpg",
      link: "intro"
    }
  ]


  goToLink(link: string):void {
    this.router.navigate([link]);
  }
}
