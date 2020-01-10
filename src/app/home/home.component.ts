import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css']
})
export class HomeComponent {

  message: string;
  calculate: any ={};
  result: any = [];
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
    let state = this.hsps.find(hsp => { return hsp.id == calculate.state_id });
    this.result.consumptionPercentage = calculate.consumption * 1.20
    this.result.kw = this.calculateKw(this.result.consumptionPercentage, state.goal) + ' kWp';
    this.result.boards = this.calculateBoards(this.result.consumptionPercentage);
    this.result.area = this.result.boards*2 + ' m²';
    // this.result.month = this.result.boards*345;
    // this.result.month = this.result.month + ' kWh';
  }

  private calculateBoards(consumption) {
    return Math.round((consumption*12)/345)
  }

  private calculateKw (kw, goal) {
    let kwResult = (kw/30)/goal
    return kwResult.toFixed(2);
  }

  private getHsp() {
    this.hsps = this.apiService.getHsp();
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