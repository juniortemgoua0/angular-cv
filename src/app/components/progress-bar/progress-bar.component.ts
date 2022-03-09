import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, AfterViewInit {

  @Input() level: number = 0
  @Input() colors!: string
  @Input() isDrag!: boolean
  @Output() onDispachColor: EventEmitter<string> = new EventEmitter<string>()
  @Output() onGetLevel: EventEmitter<number> = new EventEmitter<number>()
  @ViewChild('switcher') switcher!: ElementRef<HTMLDivElement>
  @ViewChild('switcher_bar') switcherBar!: ElementRef<HTMLDivElement>
  @ViewChild('switcher_circle') switcherCircle!: ElementRef<HTMLSpanElement>

  progressLevel: number = 0
  color: string = 'red'

  constructor() {
  }

  ngAfterViewInit(): void {
    if(this.isDrag){
      this.changeLevel()
    }
  }

  ngOnInit(): void {
    this.level = this.level >= 0 && this.level <= 100 ? this.level : 0
    let timer = setInterval(() => {
      if (this.progressLevel < this.level) {
        this.progressLevel = this.progressLevel + 1
        this.getProgressionWithColor()
      } else {
        clearInterval(timer)
      }
    }, 20)
  }

  getProgressionWithColor() {
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
    this.switcherBar.nativeElement.style.width = this.progressLevel + '%'
    this.switcherCircle.nativeElement.style.backgroundColor = this.color
    this.onDispachColor.emit(this.color)
    this.onGetLevel.emit(this.progressLevel)
  }

  changeLevel() {
    let x : number = 0
    let y : number = 0
    let switcherWidth: number
    let switcherBarWidth : number
    let isDragging : boolean = false

    this.switcher.nativeElement.addEventListener("mousedown", (e) => {
      switcherWidth = this.switcher.nativeElement.offsetWidth
      switcherBarWidth = this.switcherBar.nativeElement.offsetWidth
      x = Math.round((e.offsetX * 100) / switcherWidth);
      this.switcherCircle.nativeElement.style.outlineStyle = 'double'
      isDragging = true
    })
    this.switcher.nativeElement.addEventListener("mousemove", (e) => {
      if (isDragging) {
        switcherWidth = this.switcher.nativeElement.offsetWidth
        switcherBarWidth = this.switcherBar.nativeElement.offsetWidth
        this.progressLevel = x
        this.getProgressionWithColor()
        x = Math.round((e.offsetX * 100) / switcherWidth);
        this.switcherCircle.nativeElement.style.outlineStyle = 'double'
      }
    })
    window.addEventListener("mouseup", (e) => {
      if (isDragging) {
        this.progressLevel = x
        this.getProgressionWithColor()
        isDragging = false
        this.switcherCircle.nativeElement.style.outlineStyle = 'unset'
      }
    })
  }


}
