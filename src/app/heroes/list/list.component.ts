import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames: string[] = ['Spiderman', 'Ironman', 'She Hulk', 'Hulk', 'Thor', 'Superwoman'];
  public deteteHero?:string;

  public removeLastHero(): void{
    this.deteteHero = this.heroesNames.pop();

  }

}
