import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: any[] = [1,2,3,4,5,6,7,8,9];

  constructor() { }

  ngOnInit(): void {
  }

}
