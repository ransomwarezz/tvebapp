import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCompetitorComponent } from './game-competitor.component';

describe('GameCompetitorComponent', () => {
  let component: GameCompetitorComponent;
  let fixture: ComponentFixture<GameCompetitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCompetitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCompetitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
