import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-experience',
  templateUrl: './single-experience.component.html',
  styleUrls: ['./single-experience.component.css']
})
export class SingleExperienceComponent implements OnInit {

  @Input()  type: string = 'experience';

  constructor() { }

  ngOnInit(): void {
  }

}
