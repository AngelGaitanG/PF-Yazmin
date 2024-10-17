import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModalComponent } from '../../shared/components/shared-modal/shared-modal.component';
import { CloudinaryService } from '../../core/services/cloudinary.service';


interface IImage {
  src: string;
  title: string;
  category: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, NgIf, SharedModalComponent, CommonModule ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  constructor(
    private readonly cloudinaryService: CloudinaryService
  ){}

  imagesFromCloudinary: [] = [
    
  ];



  
  

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
    // fotos
    {src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026091/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.03.02_df4da7d9_zgnqmw.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 8'},
    {
      src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026087/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.03.02_6379b8dc_cfhv5k.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 10'
    },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026057/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.52_3f6f3411_dtfoko.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 33' },
    {
      src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026088/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.03.02_78910d2e_ral3tr.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 9'
    },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026059/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.52_dfc987df_xn6q8a.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 31' },
    {
      src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026086/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.03.01_8f6e6950_ioqhw6.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 11'
    },
    {
      src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026084/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.03.01_245dfda6_rjvdjf.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 12'
    },
    {
      src:'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026083/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.03.01_1bac9ce9_g2tlub.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 13'
    },
    {
      src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026082/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.03.01_0483e332_lvez8x.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 14'
    },
    {
      src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026080/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.03.00_96ac5070_ot0c7l.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 15'
    },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026079/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.03.00_7f3afb1f_gappql.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 16' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026077/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.03.00_6624e3c3_zmls89.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 17' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026076/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.03.00_5ecb42a0_p2azfl.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 18' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026075/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.03.00_4cc4f555_dlxskv.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 19' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026074/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.59_d7b21bcd_z0961v.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 20' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026072/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.59_53515318_u0s3cc.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 21' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026071/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.59_017b0a75_kqlc3p.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 22' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026070/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.58_fda72ef6_gd90ek.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 23' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026068/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.58_5effa296_yw95l0.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 24' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026068/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.57_f91c9845_s8pyvs.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 25' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026066/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.55_e5a31ae3_ofdv4z.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 26' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026065/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.55_650dc9bf_lwgskj.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 27' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026063/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.55_31451881_xyiwyl.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 28' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026062/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.55_15dc8ace_hzlxgn.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 29' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026061/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.53_94a18395_ptq7f7.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 30' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026059/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.52_7d695b26_jpotwy.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 32' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026056/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.52_2fc01c40_iapai3.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 34' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026054/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.51_cdafc9b4_pnggrj.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 35' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026053/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.51_abfbca42_ls0msa.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 36' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026052/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.51_4a3e581d_bzqr8u.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 37' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026051/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.50_a64cb9be_ghif7o.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 38' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026045/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.49_402d8301_difg57.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 39' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026044/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.49_097830e7_uewqq2.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 40' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026044/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.48_53fe479a_jkenqr.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 41' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026043/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.46_65775eae_geng5x.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 42' },
    { src: 'https://res.cloudinary.com/dkdsfv4ov/image/upload/v1729026043/y-fotos/Imagen_de_WhatsApp_2024-10-15_a_las_11.02.47_a7dc8fe2_eujdhq.jpg', category: 'still-life', title: 'Paisaje de ensue o', alt: 'Paisaje 43' },
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
