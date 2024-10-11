import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogPosts = [
    {
      title: 'La belleza de la naturaleza en el arte',
      excerpt: 'Explorando la inspiracion que encuentro en la naturaleza y como influye en mi proceso artistico. Desde la forma en que la luz se filtra a traves de los arboles hasta los colores del atardecer, la naturaleza tiene una forma de inspirarnos para crear algo hermoso.',
      image: 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg'
    },
    {
      title: 'Colores y emociones en pinturas abstractas',
      excerpt: 'Un analisis profundo de la relacion entre los colores y las emociones que evocan. Desde el calor del amarillo hasta el frescor del azul, los colores tienen el poder de transportarnos a otro mundo.',
      image: 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg'
    },
    {
      title: 'Texturas: agregando profundidad a tu arte',
      excerpt: 'Descubre como la textura puede transformar una pintura simple en una experiencia tactiles. Desde la suavidad de la seda hasta la aspereza del algodon, la textura agrega una nueva dimension a tu arte.',
      image: 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg'
    }
  ];

  destacatedPosts = [
    {
      title: 'La belleza de la naturaleza en el arte',
      excerpt: 'Explorando la inspiracion que encuentro en la naturaleza y como influye en mi proceso artistico...',
      image: 'assets/images/blog1.jpg'
    },
    {
      title: 'Colores y emociones en pinturas abstractas',
      excerpt: 'Un analisis profundo de la relacion entre los colores y las emociones que evocan...',
      image: 'assets/images/blog2.jpg'
    }
  ];

  blogContent = [
    {
      src: 'assets/images/ejemplo1.jpg',
      alt: 'Imagen de titulo del blog'
    },
    {
      text: 'Bienvenido a mi blog! Aqu encontraras una coleccion de art culos sobre arte, creatividad e inspiracion. Espero que disfrutes ley ndolos tanto como yo disfruto escribiendolos.'
    },
    {
      text: 'Soy Yazmin Villota, una persona creativa que ama expresarme a traves del arte. Siempre me ha fascinado la forma en que el arte puede evocar emociones, espolear la imaginaci n y unir a las personas.'
    },
    {
      src: 'assets/images/ejemplo2.jpg',
      alt: 'Imagen de pie de pagina del blog'
    }
  ];
}
