import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModalComponent } from '../../shared/components/shared-modal/shared-modal.component';

interface IImage {
  src: string;
  title: string;
  category: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, NgIf, SharedModalComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images: IImage[] = [
    { src: 'https://picsum.photos/200/300?random=1', category: 'landscapes', title: 'Paisaje de ensue o', alt: 'Paisaje 1' },
    { src: 'https://picsum.photos/200/300?random=2', category: 'portraits', title: 'La sonrisa de la vida', alt: 'Retrato 1' },
    { src: 'https://picsum.photos/200/300?random=3', category: 'still-life', title: 'Flor de loto', alt: 'Naturaleza Muerta 1' },
    { src: 'https://picsum.photos/200/300?random=4', category: 'landscapes', title: 'Paisaje de monta a', alt: 'Paisaje 2' },
    { src: 'https://picsum.photos/200/300?random=5', category: 'portraits', title: 'La mirada profunda', alt: 'Retrato 2' },
    { src: 'https://picsum.photos/200/300?random=6', category: 'still-life', title: 'Naranja y lim n', alt: 'Naturaleza Muerta 2' },
    { src: 'https://picsum.photos/200/300?random=7', category: 'landscapes', title: 'Paisaje costero', alt: 'Paisaje 3' },
    { src: 'https://picsum.photos/200/300?random=8', category: 'portraits', title: 'La sonrisa de la inocencia', alt: 'Retrato 3' },
    { src: 'https://picsum.photos/200/300?random=9', category: 'still-life', title: 'Flor de jard n', alt: 'Naturaleza Muerta 3' },
    { src: 'https://picsum.photos/200/300?random=10', category: 'landscapes', title: 'Paisaje de valle', alt: 'Paisaje 4' },
    { src: 'https://picsum.photos/200/300?random=11', category: 'portraits', title: 'La mirada penetrante', alt: 'Retrato 4' },
    { src: 'https://picsum.photos/200/300?random=12', category: 'still-life', title: 'Naranja y lim n', alt: 'Naturaleza Muerta 4' },
    { src: 'https://picsum.photos/200/300?random=13', category: 'landscapes', title: 'Paisaje de monta a nevada', alt: 'Paisaje 5' },
    { src: 'https://picsum.photos/200/300?random=14', category: 'portraits', title: 'La sonrisa de la vida', alt: 'Retrato 5' },
    { src: 'https://picsum.photos/200/300?random=15', category: 'still-life', title: 'Flor de loto', alt: 'Naturaleza Muerta 5' },
    { src: 'https://picsum.photos/200/300?random=16', category: 'landscapes', title: 'Paisaje de ensue o', alt: 'Paisaje 6' },
    { src: 'https://picsum.photos/200/300?random=17', category: 'portraits', title: 'La mirada profunda', alt: 'Retrato 6' },
    { src: 'https://picsum.photos/200/300?random=18', category: 'still-life', title: 'Naranja y lim n', alt: 'Naturaleza Muerta 6' },
    { src: 'https://picsum.photos/200/300?random=19', category: 'landscapes', title: 'Paisaje costero', alt: 'Paisaje 7' },
    { src: 'https://picsum.photos/200/300?random=20', category: 'portraits', title: 'La sonrisa de la inocencia', alt: 'Retrato 7' },
    { src: 'https://picsum.photos/200/300?random=21', category: 'still-life', title: 'Flor de jard n', alt: 'Naturaleza Muerta 7' },
    { src: 'https://picsum.photos/200/300?random=22', category: 'landscapes', title: 'Paisaje de valle', alt: 'Paisaje 8' },
    { src: 'https://picsum.photos/200/300?random=23', category: 'portraits', title: 'La mirada penetrante', alt: 'Retrato 8' },
    { src: 'https://picsum.photos/200/300?random=24', category: 'still-life', title: 'Naranja y lim n', alt: 'Naturaleza Muerta 8' },
    { src: 'https://picsum.photos/200/300?random=25', category: 'landscapes', title: 'Paisaje de monta a nevada', alt: 'Paisaje 9' },
    { src: 'https://picsum.photos/200/300?random=26', category: 'portraits', title: 'La sonrisa de la vida', alt: 'Retrato 9' },
    { src: 'https://picsum.photos/200/300?random=27', category: 'still-life', title: 'Flor de loto', alt: 'Naturaleza Muerta 9' },
    { src: 'https://picsum.photos/200/300?random=28', category: 'landscapes', title: 'Paisaje de ensue o', alt: 'Paisaje 10' },
    { src: 'https://picsum.photos/200/300?random=29', category: 'portraits', title: 'La mirada profunda', alt: 'Retrato 10' },
    { src: 'https://picsum.photos/200/300?random=30', category: 'still-life', title: 'Naranja y lim n', alt: 'Naturaleza Muerta 10' },
    
  ];
  
    selectedContent: any = null;
    isModalOpen: boolean = false;

  selectedCategory: string = 'all';
  get filteredImages() {
    if (this.selectedCategory === 'all') {
      return this.images;
    } else {
      return this.images.filter(image => image.category === this.selectedCategory);
    }
  }
  onCategoryChange(category: string) {
    this.selectedCategory = category;
  }

  openModal(content: any) {
    this.selectedContent = content;
    console.log(this.selectedContent);
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
