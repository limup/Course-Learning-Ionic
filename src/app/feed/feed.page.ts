import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public Titulo:string = "Social Bella Lorena";
  public Autor:any = "Limup TI";
  public Corporation:string = "Limup Corp.";

  public somaDoisNumeros(num1:number, num2:number): void{
    alert("Minha função funcionou");
    alert(num1 + num2);
  }
  constructor() { }

  ngOnInit() {
    this.somaDoisNumeros(10, 99);
  }

}
