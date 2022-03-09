import { Component, OnInit } from '@angular/core';
import {Skill} from "../../models/Skill";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills : Skill[] = [
    {
      index:0,
      title:"Developpement front-end",
      technology:"HTML5, SASS, VueJS, Angular, JavaFx",
      level: 49
    },
    {
      index:1,
      title:"Developpement back-end",
      technology:"HTML5, SASS, VueJS, Angular, JavaFx",
      level: 65
    },
    {
      index:2,
      title:"Developpement front-end",
      technology:"HTML5, SASS, VueJS, Angular, JavaFx",
      level: 40
    },
    {
      index:3,
      title:"Developpement front-end",
      technology:"HTML5, SASS, VueJS, Angular, JavaFx",
      level: 95
    },
    {
      index:4,
      title:"Developpement front-end",
      technology:"HTML5, SASS, VueJS, Angular, JavaFx",
      level: 75
    },
    {
      index:5,
      title:"Developpement front-end",
      technology:"HTML5, SASS, VueJS, Angular, JavaFx",
      level: 9
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
