// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material';
import { PlayersModule } from "../players";

// components
import { GameComponent } from './components/game/game.component';

// services
import { GamesService } from './games.service';
import { GamesRoutesModule } from './games.routes';
import { GameConfigurationComponent } from './components/game-configuration/game-configuration.component';
import { GameSelectionComponent } from './components/game-selection/game-selection.component';
import { GameCompetitorComponent } from './components/game-competitor/game-competitor.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    GamesRoutesModule,
    PlayersModule
  ],
  declarations: [
    GameComponent,
    GameConfigurationComponent,
    GameSelectionComponent,
    GameCompetitorComponent
  ],
  providers: [
    GamesService
  ]

})
export class GamesModule { }
