import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PokedexComponent } from './main-content/projects/pokedex/pokedex.component';
import { GameComponent } from './main-content/projects/game/game.component';
import { JoinComponent } from './main-content/projects/join/join.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'legal_notices', component: ImprintComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'game', component: GameComponent },
  { path: 'join', component: JoinComponent },
];
