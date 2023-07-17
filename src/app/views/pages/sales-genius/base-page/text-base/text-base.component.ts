import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-base',
  templateUrl: './text-base.component.html',
  styleUrls: ['./text-base.component.scss']
})
export class TextBaseComponent implements OnInit {
  @Input() heading: string = '';
  @Input() text: String = '';
  
  constructor() { }

  ngOnInit(): void {
    this.text = 
    this.text.replace(/\n/g, '<br>');
  }

  replaceMessage(message) {
    const messageElement = document.getElementById('messageList')
  }

}
