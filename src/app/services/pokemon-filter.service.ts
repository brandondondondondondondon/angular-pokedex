import { Injectable } from '@angular/core';

export interface PokemonFilter {
  name_filters?: string[],
  type_filters?: string[],
  generation_filters?: string[],
  move_name_filters?: string[], 
}

@Injectable({
  providedIn: 'root'
})
export class PokemonFilterService {

  constructor() { }

  getFilters() : PokemonFilter {
    return {};
  }


}
