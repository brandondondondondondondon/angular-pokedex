import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  // Load data from the local JSON file
  getPokemonData(): Observable<any> {
    // Adjust the URL path if needed.
    return this.http.get('/pokemon/data/pokedex.json');
  }
}