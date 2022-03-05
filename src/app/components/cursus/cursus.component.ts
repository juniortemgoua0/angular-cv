import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursus',
  templateUrl: './cursus.component.html',
  styleUrls: ['./cursus.component.css']
})
export class CursusComponent implements OnInit {

  cursus: any[] = [1,2,3,4,5,6,7,8,9];

  constructor() { }

  ngOnInit(): void {
  }

}
