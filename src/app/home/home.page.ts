import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  public precoAlcool: number = 0;
  public precoGasolina: number = 0;
  public resultado: String = "Resultado";

    calcular()
    {
      if(  this.precoAlcool && this.precoGasolina  ) {
          var pAlcool = parseFloat(this.precoAlcool.toString());
          var pGasolina = parseFloat(this.precoGasolina.toString());

          var res = pAlcool / pGasolina;
          if( res >= 0.7 ) {
            this.resultado = "Melhor utilizar Gasolina";
          }
      } else {
          this.resultado = "Preencha corretamente os campos";
      }
    }

    constructor() {}

}
