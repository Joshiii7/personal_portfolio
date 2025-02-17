import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  email: string = 'adlawanjoshiangelo@gmail.com';
  phone_number: string = '09382943739';
  current_address: string = 'Hinatuan, Surigao del Sur';

  sendEmail(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const mailtoLink = `mailto:your@email.com?subject=New Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoLink;
  }
}
