import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})

export class BasicosComponent  {

  nombreLower:string ='idilien';
  nombreUpper:string ='IDILIEN';
  nombreCompleto:string ='idI LIen';

  fecha:Date = new Date(); //día de hoy

}
