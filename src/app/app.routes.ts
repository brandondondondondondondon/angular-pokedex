import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'pokemon/', component: PokemonListComponent },
  { path: '**', redirectTo: '' }
];