import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appli-mobile';
  coordonnees: any;

  constructor(){
  }
  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
  this.coordonnees = coordinates.coords;
    //console.log('Current position:', coordinates);
  };

  bouton(){
    this.printCurrentPosition();
  }

}



