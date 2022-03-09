import {Component, Input, OnInit} from '@angular/core';
import {Skill} from "../../models/Skill";

@Component({
  selector: 'app-single-skill',
  templateUrl: './single-skill.component.html',
  styleUrls: ['./single-skill.component.css']
})
export class SingleSkillComponent implements OnInit {

 @Input() skill!: Skill
  color : string = "red"
  constructor() { }

  ngOnInit(): void {
  }

  getColor(color: string){
   this.color = color
  }
}
