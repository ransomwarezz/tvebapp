import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { PlayersComponent } from './components/players/players.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerItemComponent } from './components/player-item/player-item.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component'

// modules
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material';
import { PlayersRoutesModule } from './players.routes';

// services
import { PlayersService } from './players.service';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    PlayersRoutesModule
  ],
  declarations: [
    PlayersComponent,
    PlayerListComponent,
    PlayerItemComponent,
    PlayerProfileComponent,
  ],
  providers: [
    PlayersService
  ]
})
export class PlayersModule { }
