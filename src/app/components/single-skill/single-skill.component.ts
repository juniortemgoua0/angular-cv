import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-skill',
  templateUrl: './single-skill.component.html',
  styleUrls: ['./single-skill.component.css']
})
export class SingleSkillComponent implements OnInit {

 @Input() skill: any
  color : string = "red"
  constructor() { }

  ngOnInit(): void {
    console.log("single skill ")
  }

  getColor(color: string){
   this.color = color
  }
}
