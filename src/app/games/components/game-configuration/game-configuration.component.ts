import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-configuration',
  templateUrl: './game-configuration.component.html',
  styleUrls: ['./game-configuration.component.css']
})
export class GameConfigurationComponent implements OnInit {

  selectedDiscipline: string;

  disciplines = [
    { value: '8-ball', viewValue: '8-Ball', defaultWinningSets: 4 },
    { value: '9-ball', viewValue: '9-Ball', defaultWinningSets: 5 },
    { value: '10-ball', viewValue: '10-Ball', defaultWinningSets: 4 },
    { value: '14-1-endless', viewValue: '14/1-Endlos', defaultWinningSets: 40 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
