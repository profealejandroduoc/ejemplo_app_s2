import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {

  alertButtons=[{
    text:'Aceptar',
    cssClass:'color-aceptar'
  },{
    text:'Cancelar',
    cssClass:'color-cancelar'
  }]
  constructor(private alertctrl:AlertController) { }

  ngOnInit() {
  }

  async alerta(event:any){
    console.log("Alerta desde controller");
    const alert = await this.alertctrl.create({
      header: 'Alerta con Controller',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: [{
        id:'aceptar del alert controller',
        text:'Aceptar',
        cssClass:'color-aceptar',
        handler:()=>{
          console.log(event);
        }
      },{
        text:'Cancelar',
        cssClass:'color-cancelar'
      }],
    });

    await alert.present();
  }
  
}
