import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  imports: [ RouterModule]
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data: any) => {
      this.pokemons = data.results;
    });
  }
}