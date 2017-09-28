// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material';

// components
import { GameComponent } from './components/game/game.component';

// services
import { GamesService } from './games.service';
import { GamesRoutesModule } from './games.routes';
import { GameConfigurationComponent } from './components/game-configuration/game-configuration.component';
import { GameSelectionComponent } from './components/game-selection/game-selection.component';
import { GameSetupComponent } from './components/game-setup/game-setup.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    GamesRoutesModule
  ],
  declarations: [
    GameComponent,
    GameConfigurationComponent,
    GameSelectionComponent,
    GameSetupComponent
  ],
  providers: [
    GamesService
  ]

})
export class GamesModule { }
