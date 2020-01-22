import { Component, OnInit } from '@angular/core';
import datosCapitales from "src/assets/datosCapitales.json";

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styles: []
})
export class MapaComponent implements OnInit {

  capitales: any = datosCapitales;
  lat: number = 42.84641;
  lng: number = -2.667893;
  zoom: number = 9;
  title: string = "Primer mapa";

  infoWindowOpened : any = null;
  previousInfoWindow : any = null;

  constructor() {
    console.log(this.capitales);
   }

  ngOnInit() {
  }

  selectMarker(infoWindow: any){
    if(this.previousInfoWindow === null){
      this.previousInfoWindow = infoWindow;
    }else{
      this.infoWindowOpened = infoWindow;
      this.previousInfoWindow.close();
    }
    this.previousInfoWindow = infoWindow;
  }

}
