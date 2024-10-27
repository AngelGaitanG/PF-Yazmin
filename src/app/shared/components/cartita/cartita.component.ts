import { Component } from '@angular/core';

@Component({
  selector: 'app-cartita',
  standalone: true,
  imports: [],
  templateUrl: './cartita.component.html',
  styleUrl: './cartita.component.scss'
})
export class CartitaComponent {

  fecha: Date = new Date(2024, 9, 24, 20, 35, 0);
  nombreRemitente: string = 'Angel Gabriel Gaitán';
  direccionRemitente: string = 'El Volcán, San Luis, Argentina';
  nombreDestinatario: string = 'Yazmin Villota';
  direccionDestinatario: string = 'Pasto, Colombia';
  contenidoCarta: string = `
  Mi querida Yazmin,
  
  Mientras escribo estas palabras, se me llena el corazón de emoción al pensar en vos y en todo lo que significás para mí. Sé que estos últimos días la pasaste mal por tu enfermedad, y quiero que sepas que esta carta es mi manera de tratar de hacerte sonreír y recordarte lo especial que sos, incluso en los momentos difíciles.
  
  Aunque hace casi dos meses que nos conocemos, siento como si te conociera hace mucho tiempo. Sos una mina extraordinaria, Yazmin. Tu inteligencia brilla en cada charla que tenemos, y tu forma de ser me tiene loco. Pero hay algo que me vuela la cabeza cada vez que lo veo: tu voz. Cuando cantás, parece que el mundo se detiene solo para escucharte. Es como si pintaras el aire con tus melodías, de la misma manera en que le das vida a tus lienzos con los pinceles.
  
  Y hablando de cosas que me tienen mal, no puedo dejar de mencionar tus ojos. Esos ojos marrones hermosos que brillan con una luz especial, reflejando toda la bondad y el amor que tenés adentro. Cuando los miro, veo a una persona llena de compasión, alguien que es buena con los animales y con toda la gente que la rodea. A veces, me encuentro deseando poder mirarlos de cerca, perderme en su brillo y descubrir todos los secretos y sueños que guardan. Tus ojos, Yazmin, son como ventanas a un alma hermosa y copada.
  
  Hablando de pintura, ¿sabés que cada vez que veo el color azul pienso en vos? No solo porque sé que es tu color favorito (y el mío), sino porque me hace acordar a la profundidad de nuestras charlas, a esas noches en las que nos quedamos hablando por horas, compartiendo chismes, risas y, a veces, nuestras historias más tristes. Esos momentos son un tesoro para mí, Yazmin. La confianza que construimos, la forma en que podemos ser completamente honestos el uno con el otro, es algo que valoro una banda.
  
  Me encanta cómo nos burlamos de la forma en que hablamos y cómo nos "peleamos" por boludeces. Esas pequeñas jodas, esos momentos de complicidad, son los que hacen que cada día con vos sea una aventura. Y hablando de aventuras, ¿te imaginás cuando seamos viejitos y sigamos contándonos todo? Porque eso es lo que espero, Yazmin. Quiero que sigamos teniendo esta confianza, esta conexión, por muchos, muchos años más.
  
  Hay algo que quiero que sepas: vos ya sos alguien importante para mí. Sé que a veces jodo diciendo cosas para enojarte, y me encanta cómo te enojás cuando lo hago. Es uno de los detalles más tiernos de tu personalidad.
  
  Tu arte, Yazmin, es un reflejo de tu alma. Cada pincelada, cada color que elegís, cuenta una historia. Tu talento me deja sin palabras. Ver cómo le das vida a tus ideas en el lienzo es como ser testigo de magia pura. Sos una artista increíble, y estoy seguro de que tu arte va a tocar los corazones de mucha gente, así como tocaste el mío.
  
  Quiero que sepas que admiro tu fuerza, tu pasión y tu autenticidad. Sos una persona única, Yazmin, y me siento re afortunado de tenerte en mi vida. Gracias por ser vos, por compartir tus alegrías y tristezas conmigo, por confiar en mí y por dejarme ser parte de tu mundo.
  
  Espero que esta carta te haga sonreír y que te recuerde lo especial que sos, especialmente en estos días en los que no te sentiste bien. Quiero que sepas que estoy acá para vos, en las buenas y en las malas. Tu bienestar es re importante para mí, y deseo de todo corazón que te recuperes pronto.
  
  No puedo esperar para crear más recuerdos con vos, para seguir descubriendo nuevas facetas de tu personalidad maravillosa y para seguir creciendo juntos. Acordate que sos fuerte, sos talentosa, y sos increíblemente valiosa. Esta enfermedad va a pasar, y voy a estar a tu lado en cada paso del camino.
  
  Con todo mi cariño, admiración y los mejores deseos para que te mejores pronto. `;
  firmaImagenUrl: string = 'https://via.placeholder.com/150';

}
