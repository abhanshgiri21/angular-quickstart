import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <span>{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <h2>{{hero.name}} details!</h2>
    <div>
        <label for="">id:</label>
        <input type="text" placeholder="name" [(ngModel)]="hero.name">
    </div>
    <div><label for="">name: </label>{{hero.name}}</div>
    `
})
export class AppComponent  {
  title = 'Tour of heroes';
  heroes  = HEROES;
}
