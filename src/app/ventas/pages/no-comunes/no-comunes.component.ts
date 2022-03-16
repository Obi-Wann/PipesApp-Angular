import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})

export class NoComunesComponent  {

nombre:string ='Pedro';
genero:string = 'masculino';

invitacionMap={
  'masculino':'invitarlo',
  'femenino':'invitarla'
}

clientes:string[]=['Maria','Pedro','Pablo','Alba'];
clientesMap={
  '=0':'no tenemos ningún cliente esperando.',
  '=1':'tenemos un cliente esperando.',
  'other':'tenemos # clientes esperando.'
}

cambiarCliente(){
this.nombre='Alba';
this.genero='femenino';
}

borrarCliente(){
this.clientes.pop()
}

persona={
  nombre:'Samantha',
  edad:35,
  direccion:'Ottawa,Canadá',
  id:56784
}

heroes=[
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Thor',
      vuela: true
    }
 ]

miObservable = interval(1000);

valorPromesa = new Promise((resolve,reject) => {

  setTimeout(() =>{
  resolve('Descarga Completada.');
  },7000);
});

}