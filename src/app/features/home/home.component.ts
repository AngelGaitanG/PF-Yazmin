import { Component } from '@angular/core';
import { IHomeCard } from '../../core/interfaces/home-card.interface';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  cards :IHomeCard[] = [
    {
      button: "BLOG",
      alt: "blog",
      src: "../../../assets/images/blog.jpg",
      link: ""
    },
    {
      button: "GALLERY",
      alt: "gallery",
      src: "../../../assets/images/gallery.jpg",
      link: ""
    },
    {
      button: "INTRODUCCION",
      alt: "introduccion",
      src: "../../../assets/images/introduction.jpg",
      link: ""
    }
  ]

}
