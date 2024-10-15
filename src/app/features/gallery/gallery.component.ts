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
    { src: '../../assets/paints/paint3.jpg', category: 'landscapes', title: 'Paisaje de ensue o', alt: 'Paisaje 3' },
    {
      src: '../../assets/paints/paint4.jpg',
      category: 'landscapes',
      title: 'Paisaje de ensue o',
      alt: 'Paisaje 2',
    },
    { src: '../../assets/paints/paint1.jpg', category: 'landscapes', title: 'Paisaje de ensue o', alt: 'Paisaje 1' },
    { src: '../../assets/paints/paint2.jpg', category: 'landscapes', title: 'Paisaje de ensue o', alt: 'Paisaje 2' },
    { src: '../../assets/paints/la_escapatoria.jpg', category: 'landscapes', title: 'La Escapatoria', alt: 'Paisaje 6' },
    { src: '../../assets/paints/paint0.jpg', category: 'landscapes', title: 'Paisaje de ensue o', alt: 'Paisaje 4' },
    { src: '../../assets/paints/una_mascara_para_renacer.jpg', category: 'landscapes', title: 'Una mascara para renacer', alt: 'Paisaje 7' },
    
  ];
  
    selectedContent: any = null;
    
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
    
    isModalOpen: boolean = false;
  openModal(content: any) {
    this.selectedContent = content;
    console.log(this.selectedContent);
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
