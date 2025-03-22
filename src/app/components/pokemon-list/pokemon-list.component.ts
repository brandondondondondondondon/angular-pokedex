import { Component, OnInit } from '@angular/core';
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

}