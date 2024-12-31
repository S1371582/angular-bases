import { Component } from "@angular/core";

//component es un decorador que va a convertir mi clase en un componente:
@Component({
  //Con este 'app-counter' llamo desde el html a todo el componente.
  selector: 'app-counter',
  //Dentro del template y entre `` el html:
  template: `
  <h3> Counter: {{ counter}} </h3>


<button (click)="increaseBy()"> +1 </button>
<button (click)="reset()"> Reset </button>
<button (click)="decreaseBy()"> -1 </button>
  `
})

//Clase con los métodos utilizados en el componente
export class CounterComponent{
  public counter: number = 10;

  increaseBy(): void{
    this.counter += 1;    // this.counter = this.counter +1;
  }

  decreaseBy(): void{
    this.counter -= 1;
  }

  reset(){
    this.counter = 10;
  }
}
