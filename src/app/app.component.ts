import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonCommandBarComponent } from "./components/pokemon-command-bar/pokemon-command-bar.component";
import { PokemonFilterComponent } from "./components/pokemon-filter/pokemon-filter.component";
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from "./components/pokemon-list/pokemon-list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, PokemonListComponent, PokemonCommandBarComponent, PokemonFilterComponent, PokemonDetailComponent, PokemonListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pokedex';
  filterVisible = false;
  selectedPokemon: any = null;

  toggleFilters() {
    console.log('toggle filter');
    this.filterVisible = !this.filterVisible;
  }

  openPokemonDetail(pokemon: any) {
    console.log('Pokemon selected:', pokemon);
    this.selectedPokemon = pokemon;
  }

  closePokemonDetail() {
    console.log('Closing detail view');
    this.selectedPokemon = null;
  }
}