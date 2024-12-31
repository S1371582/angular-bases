import { Component } from '@angular/core';
import { takeLast } from 'rxjs';

// IMPORTANTE: Decorador que define el selector, el html, el css.
@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironwoman';
  public age: number  =  44;

  //Método getter (get) Funciona como una PROPIEDAD de la clase, a pesar de ser un método:
  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  //Creo un método público para poder usarlo en el html (private solo podría usarlo dentro de esta clase):
  //Si no se especifica, es público.
  public getHeroDescription(): string{
    return  `${ this.name } - ${this.age}`;  //Comillas de la tecla ^
  }

  changeHero(): void{
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void{
    this.name = 'Ironwoman';
    this.age = 44;

  }
}

