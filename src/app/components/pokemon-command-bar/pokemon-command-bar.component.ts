import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-pokemon-command-bar',
  imports: [RouterModule, MatIconModule],
  templateUrl: './pokemon-command-bar.component.html',
  styleUrl: './pokemon-command-bar.component.scss'
})
export class PokemonCommandBarComponent {
  @Output() toggleFilter = new EventEmitter<void>();
}


