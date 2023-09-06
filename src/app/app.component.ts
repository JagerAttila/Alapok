import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alapok';
  oszlopok:any;

  
  ujTancsi:any={}
  uj(){
    this.obj.push(this.ujTancsi);
    this.ujTancsi={}
  }

  constructor(private config:ConfigService) { 
    this.oszlopok=config.getOszlopok();
  }

  obj:any =[
    {name:"Béla", age:31, hair:"barna"},
    {name:"Attila", age:48, hair:"szőke"},
    {name:"Dezső", age:55, hair:"fekete"},
    {name:"Józsi", age:55, hair:"fekete"},
    {name:"András", age:56, hair:"barna"},
  ];



  torol(tancsi:any, i:number){
    console.log("i:",i)
    console.log("Kitörlendő: ", tancsi)
    //this.obj.splice(i,1)
    this.obj=this.obj.filter(
      (e:any) => e!=tancsi)
  }
}
