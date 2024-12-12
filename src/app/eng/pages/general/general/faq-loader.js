
import { loadTemplate, createParagraphList } from "./load-template.js";




const faqTemplate = (
  `
  <div class="tab ">
    <div class="tab-link is-active">{{ Question }}</div>
    <div class="tab-container">{{ Answer }}</div>
  </div>
  `
);


const faqData = [
  {
    Question: 'KHORTEX puede ofrecerle la solución sin precedentes a sus problemas de endeudamiento. Nuestra experiencia, nuestros conocimientos y nuestros modernos métodos de trabajo nos ayudan a actuar con rapidez, eficacia y con la garantía del mejor resultado posible de acuerdo con las leyes locales.',
    Answer: createParagraphList([
      'Le ofrecemos comprar su cartera NPL y estamos dispuestos a pagarle el valor de la misma en cuanto firmemos el Contrato. ' +
        'Podemos resolver sus problemas de deuda en un día, que le permitirá obtener el dinero y limpiar su saldo mediante la cancelación de sus deudas. ' 
    ]),
  },
 
];

$( document ).ready(function () {
  loadTemplate('#faq', faqTemplate, faqData);
});


