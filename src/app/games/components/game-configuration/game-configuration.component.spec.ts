import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameConfigurationComponent } from './game-configuration.component';

describe('GameConfigurationComponent', () => {
  let component: GameConfigurationComponent;
  let fixture: ComponentFixture<GameConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
