import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent {

  message: string;
  calculate = {
    state_id: '',
    city_id: '',
    consumption: ''
  };
  states = [];
  citys = [];
  hsps = [];

  constructor(
      private apiService: ApiService
    ) { }

  ngOnInit() {
    this.getStates();
    this.getHsp();
  }

  public setCity(idState) {
    this.apiService.getCitys(idState).subscribe(
      citys => {
        this.citys = citys;
      }
    );
  }

  public submit (calculate) {

  }

  private getHsp() {
    this.hsps = this.apiService.getHsp();
    console.log(this.hsps)
  }

  private getStates () {
    this.apiService.getStates().subscribe(
      states => {
        this.states = states;
      }
    );
  }

  // sendMessage() {
  //   this.chatService.sendMessage(this.message);
  //   this.message = '';
  //   this.chatService.getMessages()
  // }
}