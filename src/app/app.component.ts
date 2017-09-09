import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        
      </li>
    </ul>
    <h2>{{hero.name}} details!</h2>
    <div>
        <label for="">id:</label>
        <input type="text" placeholder="name" [(ngModel)]="hero.name">
    </div>
    <div><label for="">name: </label>{{hero.name}}</div>`
})
export class AppComponent  {
  title = 'Tour of heroes';
  heroes  = Hero{
    id:1;
    name:'windstorm'
  }
}
