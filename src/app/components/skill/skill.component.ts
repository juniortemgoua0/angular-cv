import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills : any[] = [
    {
      title:"Developpement front-end",
      technology:"HTML5, SASS, VueJS, Angular, JavaFx",
      level: 49
    },
    {
      title:"Developpement back-end",
      technology:"HTML5, SASS, VueJS, Angular, JavaFx",
      level: 65
    },
    {
      title:"Developpement front-end",
      technology:"HTML5, SASS, VueJS, Angular, JavaFx",
      level: 40
    },
    {
      title:"Developpement front-end",
      technology:"HTML5, SASS, VueJS, Angular, JavaFx",
      level: 95
    },
    {
      title:"Developpement front-end",
      technology:"HTML5, SASS, VueJS, Angular, JavaFx",
      level: 75
    },
    {
      title:"Developpement front-end",
      technology:"HTML5, SASS, VueJS, Angular, JavaFx",
      level: 9
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
