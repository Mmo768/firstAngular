import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  gallery:any[]=[
    {title:"LOG CABIN",srcImg:"./assets/image/cabin.png"},
    {title:"TASTY CAKE",srcImg:"./assets/image/cake.png"},
    {title:"CIRCUS TENT",srcImg:"./assets/image/circus.png"},
    {title:"CONTROLLER",srcImg:"./assets/image/game.png"},
    {title:"LOCKED SAFE",srcImg:"./assets/image/safe.png"},
    {title:"SUBMARINE",srcImg:"./assets/image/submarine.png"},
  ];

  modalTitle!:string;
  modalSrc!:string;
  modalShow(el:any):void{
    this.modalTitle=el.title;
    this.modalSrc=el.srcImg;
  }

  

}
