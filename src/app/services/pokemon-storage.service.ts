import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonStorageService {

  private allPokemon: Pokemon[] = [];
  private _pokemons$ = new BehaviorSubject<Pokemon[]>([]);
  public pokemons$: Observable<Pokemon[]> = this._pokemons$.asObservable();

  constructor(private http: HttpClient) {
    this.loadPokemon();
  }

  // Load the Pokémon data once and store it in the BehaviorSubject
  private loadPokemon(): void {
    this.http.get<Pokemon[]>('/pokemon/data/pokedex.json').subscribe(data => {
      // Adjust this if your JSON structure differs (e.g., data.pokemons)
      this.allPokemon = data;
      this._pokemons$.next(this.allPokemon);
    });
  }

  // Filter the master list based on a provided function
  public filterPokemon(filterFn: (pokemon: Pokemon) => boolean): void {
    const filtered = this.allPokemon.filter(filterFn);
    this._pokemons$.next(filtered);
  }

  // Reset the filter to show the full list
  public resetFilter(): void {
    this._pokemons$.next(this.allPokemon);
  }
}
