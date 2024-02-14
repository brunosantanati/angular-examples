import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav>
      <div>
        <img class="logo" src="assets/dog-walker-logo.svg">
        <h1 class="title">Walk My Dog</h1>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
  nav {
      display: flex;
      justify-content: space-between;
      margin: 20px 10px 10px 10px;
    }
    
    nav div.menu-items {
      display: flex;
      width: 10%;
      justify-content: space-between;
    }
    nav > div {
      display: flex;
    }
    .title {
      font-size: 25pt;
    }
    .logo {
      height: 40px;
    }
  `
  ],
})
export class AppComponent {
  title = 'walk-my-dog';
}
