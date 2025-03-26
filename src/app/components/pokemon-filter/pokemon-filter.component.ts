import { Component, EventEmitter, Input, Output, Predicate } from '@angular/core';
import { PokemonStorageService } from '../../services/pokemon-storage.service';
import { Pokemon } from '../../models/pokemon.model';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

export interface PokemonFilterCriteria {
  type?: string;
  generation?: number;
  // Extend with more criteria as needed.
}


@Component({
  selector: 'app-pokemon-filter',
  templateUrl: './pokemon-filter.component.html',
  styleUrls: ['./pokemon-filter.component.scss'],
  imports: [ MatSidenavModule, MatFormFieldModule, MatSelectModule ]
})
export class PokemonFilterComponent {
  // @Input()
  isFilterOpen: boolean = true;

  filters: Map<String, (pokemon: Pokemon) => boolean>;
  selectedGeneration = '';
  selectedType = '';

  constructor(private pokemonStorage: PokemonStorageService){
    this.filters = new Map<String, (pokemon: Pokemon) => boolean>;
  }

  addFilter(name: string, fn: (pokemon: Pokemon) => boolean): void {
    this.filters.set(name, fn);
  }

  applyFilters(): void {
    for(const k in this.filters.keys()){
      const result = this.filters.get(k);
      if (result) {
        this.pokemonStorage.filterPokemon(result)
      }
    }
  }

  resetFilters(): void {
    this.filters.clear();
  }
}