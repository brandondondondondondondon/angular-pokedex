import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonStorageService } from '../../services/pokemon-storage.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  imports: [RouterModule, CommonModule]
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  @Output() pokemonSelected = new EventEmitter<Pokemon>();
  
  constructor(private pokemonStore: PokemonStorageService) { }

  ngOnInit(): void {
    this.pokemonStore.pokemons$.subscribe(data => {
      this.pokemons = data;
    });
  }

  // Add this method inside your component class
  getTypeIconUrl(type: string): string {
    // Remove the 'POKEMON_TYPE_' prefix and convert the rest to lowercase.
    const typeName = type.replace('POKEMON_TYPE_', '').toLowerCase();
    // Return the URL of the icon image. Make sure the filename matches (e.g., grass.png, poison.png, etc.)
    return `/pokemon/icons/types/${typeName}.svg`;
  }

  getPokemonIconUrl(pokemon: Pokemon): string {
    // Convert dexNr to a 3-digit padded string
    const dexNr = pokemon.dexNr.toString().padStart(3, '0');
    // Convert the English name to lowercase and replace spaces (if any) with dashes
    const name = pokemon.names.English.toLowerCase().replace(/ /g, '-').replace(/[^a-zA-Z\-]/g, "");
    // Build and return the URL to the icon image. 
    // Adjust the URL path if your public folder is served differently.
    return pokemon.assets.image;
  }

  onIconError(event: Event): void {
    const target = event.target as HTMLImageElement;
    // Set the source to a default icon when the original fails
    target.src = '/pokemon/icons/000-default.svg';
  }
}