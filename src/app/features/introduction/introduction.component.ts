import { NgFor, NgIf, NgSwitch } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

enum Section {
  Infancia = 0,
  Estudios = 1,
  Logros = 2
}


@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [NgFor, NgIf, NgSwitch, RouterLink],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent implements OnInit {
  sections = [
    {
      name: 'Infancia',
      content: `Cuando era niña, me encantaba perderme entre los colores y las formas de mis pinturas. Me gustaba imaginar que estaba en un mundo magico, donde podia volar y correr libremente. Me encantaba tambien jugar, aunque a veces me daba miedo hablar delante de los demas. Pero en mi cuaderno de dibujo, podia expresarme libremente. `
    },
    {
      name: 'Estudios',
      content: `La belleza del arte en el mundo. Aprendiendo sobre la pintura y el arte. La pintura se ha convertido en una forma de expresión. Se ha convertido en un modo de expresión.`
    },
    {
      name: 'Logros Artímicos',
      content: `Una mirada única al mundo a de pinceladas vibrantes y colores intensos. Explorando la belleza y la emoción en cada lienzo, inspirada por el estilo de Van Gogh.`
    }

  ]
  actualSection: Section = Section.Infancia;

  facts: string[] = [
    'Sinestesia: pinta lo que escucha',
    'Autora de "La escapatoria"',
    'Adicta al chocolate en dias de lluvia',
    'Amante eterna de Hansel'
];

  ngOnInit(): void {
    const starsContainer: HTMLElement | null = document.querySelector('.stars');
    if (!starsContainer) return;
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.width = `${Math.random() * 3 + 1}px`;
      star.style.height = star.style.width;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      if (starsContainer) starsContainer.appendChild(star);
    }
  }


  changeSection(section: number) { 
    this.actualSection = section as Section;
  }
}
