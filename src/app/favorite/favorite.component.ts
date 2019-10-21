import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  template: `
    <div>
      <i
        [class]="isFavorite ? 'fas fa-star' : 'far fa-star'"
        (click)="toggleFavorite()"
      ></i>
      <input [(ngModel)]="title" />
      <p>{{ title | titlecase | format: ['The', 'Of'] }}</p>
    </div>
  `
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit() {}

  onKeyUp(value) {
    value.split(' ');
  }
}
