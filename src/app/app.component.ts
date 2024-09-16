import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [SMS],
})
export class AppComponent {
  title = 'appli-mobile';
  coordonnees: any;
  tel!: string;
  message: string = "Hello";

  constructor(private sms: SMS) {
  }
  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    this.coordonnees = coordinates.coords;
  };

  afficherCoordonnees() {
    this.printCurrentPosition();
  }

  sendSms() {
    const options = {
      replaceLineBreaks: true, // remplace les sauts de ligne par des espaces
      android: {
        intent: '' // laissez vide pour envoyer directement le SMS
      }
    };

    this.sms.send(this.tel, this.message, options)
      .then(() => {
        console.log('SMS envoyé avec succès !');
      }).catch(error => {
        console.error('Erreur lors de l\'envoi du SMS : ', error);
      });


  }



}