import { Component, OnInit } from '@angular/core';

import { ChatService } from '../chat.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  // styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  messages = []
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }


}
