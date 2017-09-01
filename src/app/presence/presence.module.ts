import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresenceService } from './presence.service';
import { PresenceComponent } from './components/presence/presence.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PresenceComponent
  ],
  providers: [
    PresenceService
  ]
})
export class PresenceModule { }
