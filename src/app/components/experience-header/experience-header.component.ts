import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-experience-header',
  templateUrl: './experience-header.component.html',
  styleUrls: ['./experience-header.component.css']
})
export class ExperienceHeaderComponent implements OnInit {

  @Input() title : string = '';
  @Input() subtitle : string = ''
  @Input() image : string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
