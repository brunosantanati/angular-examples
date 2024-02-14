import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsService } from './dogs.service';

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      <h2 class="hero-text">
        Discover Pets to walk near you
      </h2>
    </section>
    <article class="pet-list">
      <ul>
        <li *ngFor="let dog of dogsService.dogs">{{ dog.name }}</li>
      </ul>
    </article>
  `,
  styles: [`
  .pet-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; 
    padding: 10px;
  }

  .hero-text {
    font-size: 25pt;
    padding: 10px;
  }
`]
})
export class DogsListComponent implements OnInit {

  constructor(readonly dogsService: DogsService) { }

  ngOnInit(): void {
  }

}
