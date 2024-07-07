import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-faq',
  templateUrl: './report-faq.component.html',
  styleUrls: ['./report-faq.component.scss'],
})
export class ReportFaqComponent implements OnInit {

  faqs = [
    { question: '¿Cómo reporto un problema?', answer: 'Puedes reportar problemas a través de la sección de reportes en nuestra aplicación.' },
    { question: '¿Cómo puedo cambiar mi contraseña?', answer: 'Ve a la configuración de tu perfil y modifica el campo "Contraseña".' },
    { question: '¿Cómo puedo borrar un vehículo?', answer: 'Deberás crear una incidencia.' },
    { question: '¿Cómo se si mi incidencia ha sido enviada?', answer: 'Recibirás una notificación en tu correo electrónico.' },
  ];

  constructor() { }

  ngOnInit() { }

}
