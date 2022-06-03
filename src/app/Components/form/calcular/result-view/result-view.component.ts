import { Component, Input, OnInit } from '@angular/core';
import { HoursWorked, HoursWorkedIInit } from 'src/app/models/hoursWorked';
import { Person, personInit } from 'src/app/models/person';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {
  myImage: string = '../../assets/resources/HANDYMAN.png';

  @Input() showResult: boolean = false; 
  @Input() person: Person ={ ...personInit }; 
  @Input() resultCalculate: HoursWorked = { ...HoursWorkedIInit };
  @Input() totalHours: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
