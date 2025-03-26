import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  @Input() pokemon: any;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }

  getQuickMoveKeys(): string[] {
    return this.pokemon && this.pokemon.quickMoves
      ? Object.keys(this.pokemon.quickMoves)
      : [];
  }

  getCinematicMoveKeys(): string[] {
    return this.pokemon && this.pokemon.cinematicMoves
      ? Object.keys(this.pokemon.cinematicMoves)
      : [];
  }
}