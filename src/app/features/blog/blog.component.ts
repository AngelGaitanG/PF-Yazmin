import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModalComponent } from '../../shared/components/shared-modal/shared-modal.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor, NgIf, SharedModalComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogPosts = [
    {
      title: 'La belleza de la naturaleza en mis pinturas',
      text: 'Considero que mi elemento recurrente en mis pinturas son las ramas, las hojas y las flores. Las ramas las utilizo para dar a entender que la obra no tiene un final, es decir, las ramas de un árbol se extienden sin parar en busca de nutrientes. Esto me inspira a crear una narrativa continua dentro de cada pieza. Las flores, por otro lado, las trato de pintar de manera diferente y con colores vivos para contrastar con los oscuros de las ramas. Quiero que cada flor cuente su propia historia mientras complementa la composición general. En cuanto a las hojas, las utilizo para equilibrar y complementar las ramas y flores, empleando colores neutros que no opaquen el resto de la obra. Este diálogo entre los elementos naturales es lo que hace que mis pinturas cobren vida.',
      resume: 'Exploro cómo las ramas, hojas y flores son elementos clave en mis obras, transmitiendo una narrativa continua a través de los contrastes y la armonía de colores.',
      image: 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg'
    },
    {
      title: 'El papel del azul en mi arte',
      text: 'Los colores que utilizo varían según la obra que tenga en mente. Me gusta iniciar con colores oscuros y luego aplicar tonos más claros, difuminándolos para obtener una gama media que no abrume al espectador. El azul, mi color favorito, es fundamental en este proceso creativo. Al ser un color primario, es extremadamente versátil; lo utilizo para representar cielos vastos y paisajes marinos. Dependiendo de la tonalidad, puedo transmitir una sensación de calma o inquietud. Por ejemplo, al mezclar azul primario con negro, puedo crear un mar melancólico, mientras que un azul claro puede evocar alegría y esperanza en un cielo despejado. Cada matiz del azul que elijo se convierte en una extensión de mis emociones y reflexiones.',
      resume: 'Descubre cómo el azul se convierte en la base emocional de mis pinturas, reflejando sensaciones que van desde la melancolía hasta la alegría.',
      image: 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg'
    },
    {
      title: 'Texturas que añaden profundidad a mis obras',
      text: 'La creación de texturas es una parte fundamental de mi proceso artístico. Utilizo una variedad de materiales, como sal, esponjas y pinceles de diferentes tamaños, para dar vida y volumen a mis pinturas. A través de diferentes trazos, logro crear capas que no solo son visualmente atractivas, sino que también invitan al espectador a explorar cada detalle. La textura puede transmitir emociones y mensajes de maneras que los colores solos no pueden. Por ejemplo, al utilizar sal en la pintura, puedo crear efectos de luz y sombra que añaden una dimensión táctil. Esta interacción entre el espectador y la obra es vital para mi arte, pues quiero que la experiencia sea lo más inmersiva posible.',
      resume: 'La importancia de las texturas en mis obras, utilizando diversos materiales para añadir profundidad táctil y emocional a cada creación.',
      image: 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg'
    },
    {
      title: 'El impacto emocional del color azul',
      text: 'El azul es más que mi color favorito; es un reflejo de mis emociones y de la vida cotidiana. Dependiendo del contexto y la tonalidad, el azul puede evocar diferentes sentimientos. Por ejemplo, en una obra que trata sobre la nostalgia, uso un azul más oscuro y profundo, creando una atmósfera melancólica. Por otro lado, en una pintura que busca transmitir alegría, utilizo tonos claros y vibrantes que iluminan el lienzo. Esta dualidad me permite jugar con la percepción y el sentimiento del espectador, invitándolo a reflexionar sobre sus propias emociones mientras observa mi trabajo. El azul, con su versatilidad, se convierte en una herramienta poderosa en mi arsenal creativo.',
      resume: 'Exploro cómo el azul puede representar tanto la melancolía como la alegría en mis obras, adaptándose a las emociones que busco transmitir.',
      image: 'assets/images/blog1.jpg'
    },
    {
      title: 'Inspiración en las obras de Van Gogh',
      text: 'La obra de Van Gogh ha sido una fuente constante de inspiración para mí. Su estilo único, caracterizado por pinceladas rápidas y colores vibrantes, crea una energía palpable en cada pieza. En particular, la serie “Los girasoles” me fascina. Van Gogh captura la esencia de las flores en diferentes posturas, cada una revelando su propio carácter. A través de su paleta de colores cálidos y fríos, logra una armonía que me motiva a explorar nuevas combinaciones en mi propio trabajo. Su habilidad para evocar emociones a través de la simplicidad de la naturaleza me anima a seguir experimentando en mi propio arte.',
      resume: 'Un análisis de cómo las pinceladas y colores de Van Gogh, especialmente en “Los girasoles”, me inspiran a crear obras con armonía entre lo cálido y lo frío.',
      image: 'assets/images/blog2.jpg'
    },
    {
      title: 'La relación entre arte y emociones',
      text: 'A lo largo de mi carrera como artista, he observado cómo el arte puede influir en las emociones de las personas. Cada trazo, cada color, tiene el potencial de evocar sentimientos profundos. Mi objetivo es crear obras que no solo sean visualmente atractivas, sino que también conecten con el espectador a un nivel emocional. Por ejemplo, en mis pinturas abstractas, juego con formas y colores para representar la alegría, la tristeza o la esperanza. Esta conexión entre el arte y las emociones es lo que hace que cada obra sea única y significativa. Me esfuerzo por transmitir mis propias experiencias y sentimientos a través de mis creaciones, invitando al espectador a reflexionar sobre sus propias vivencias.',
      resume: 'Exploro la poderosa relación entre el arte y las emociones, buscando conectar con los espectadores a través de mis creaciones y experiencias personales.',
      image: 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg'
    }
  ];

  blogArts =[
    {
      image: 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg',
      title: 'La belleza de la naturaleza en mis pinturas',
    },
    {
      image: 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg',
      title: 'La belleza de la naturaleza en mis pinturas',
    },
    {
      image: 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg',
      title: 'La belleza de la naturaleza en mis pinturas',
    }
  ]

  destacatedPosts = [
    {
      title: 'El impacto emocional del color azul',
      text: 'El azul, como mi color favorito, refleja lo que vemos en nuestra vida cotidiana. Dependiendo del color, trato de interpretar lo que quiero dar a entender en mis obras. Tomando como ejemplo el azul primario, al mezclarlo con un poco de negro, lo usaría para crear un mar melancólico o un paisaje oscuro. Por otro lado, si busco reflejar alegría, opto por tonos claros en cielos o en flores. Esta capacidad de transformación del azul es lo que lo convierte en una herramienta esencial en mi paleta.',
      resume: 'Una exploración de cómo el azul puede evocar diferentes emociones y cómo lo uso para dar vida a mis obras.',
      image: 'assets/images/blog1.jpg'
    },
    {
      title: 'Inspiración en las obras de Van Gogh',
      text: 'La manera en que Van Gogh utiliza el color y la textura en sus obras me inspira profundamente. En su serie de “Los girasoles”, captura la esencia de estas flores de manera única, utilizando una paleta vibrante que resuena con mis propios intereses artísticos. Me fascina cómo logra transmitir movimiento y energía a través de su estilo de pincelada suelta, lo que me anima a experimentar con técnicas similares en mis propias pinturas. Su legado me recuerda la importancia de la autenticidad en el arte.',
      resume: 'Un vistazo a cómo la técnica y el color en las obras de Van Gogh me inspiran a encontrar mi propia voz artística.',
      image: 'assets/images/blog2.jpg'
    },
  ];

  blogContent = [
    {
      src: 'assets/images/ejemplo1.jpg',
      alt: 'Imagen de titulo del blog'
    },
    {
      resume: 'Soy Yazmin Villota, una artista que expresa emociones y experiencias a través de mi trabajo, invitando a la reflexión y la conexión.',
      text: 'Soy Yazmin Villota, una persona creativa que ama expresarse a través del arte. Siempre me ha fascinado la forma en que el arte puede evocar emociones, espolear la imaginación y unir a las personas. Mi viaje artístico ha sido una exploración constante, donde cada pincelada y cada color cuentan una historia única. A lo largo de los años, he aprendido a canalizar mis experiencias personales en mi trabajo, creando piezas que no solo son visuales, sino que también invitan a la reflexión y la conexión. Mi objetivo es transmitir emociones y contar historias a través de mis obras, invitando a todos a descubrir el significado que hay detrás de cada pieza.'

    },
    {
      src: 'assets/images/ejemplo2.jpg',
      alt: 'Imagen de titulo del blog'
    }

  ];
  selectedContent: any = null;
  isModalOpen: boolean = false;

  openModal(content: any) {
    this.selectedContent = content;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
