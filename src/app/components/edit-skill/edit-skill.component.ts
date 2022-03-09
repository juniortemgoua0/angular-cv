import {Component, Input, OnInit} from '@angular/core';
import {Skill} from "../../models/Skill";

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  @Input() skill!: Skill
  currentSkill!: Skill
   level: number = this.skill?.level | 0
  constructor() { }

  ngOnInit(): void {
    this.currentSkill = this.skill
  }

  getLevel(level: number){
    this.level = level
    console.log(level)
  }

}
