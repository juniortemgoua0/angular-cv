import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() level: number = 0
  @Input() colors!: string
  @Output() onDispachColor: EventEmitter<string> = new EventEmitter<string>()
  @ViewChild('switcher_bar') switcherBar!: ElementRef<HTMLDivElement>
  @ViewChild('switcher_circle') switcherCircle!: ElementRef<HTMLSpanElement>

  progressLevel: number = 0
  color: string = 'red'

  constructor() {
  }

  ngOnInit(): void {
    this.level = this.level >= 0 && this.level <= 100 ? this.level : 0
    let timer = setInterval(() => {
      if (this.progressLevel < this.level) {
        this.progressLevel = this.progressLevel + 1
        this.updateView()
      } else {
        clearInterval(timer)
      }
    }, 20)
  }

  updateView() {
    if (this.progressLevel >= 0 && this.progressLevel < 10) {
      this.color = "red"
    } else if (this.progressLevel >= 10 && this.progressLevel < 50) {
      this.color = "yellow"
    } else if (this.progressLevel >= 50 && this.progressLevel < 70) {
      this.color = "green"
    } else if (this.progressLevel >= 70 && this.progressLevel <= 100) {
      this.color = "#1376ba"
    }
    this.switcherBar.nativeElement.style.backgroundColor = this.color
    this.switcherBar.nativeElement.style.width = this.progressLevel - 3 + '%'
    this.switcherCircle.nativeElement.style.backgroundColor = this.color
    this.onDispachColor.emit(this.color)
  }

}
