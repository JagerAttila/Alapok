import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alapok';

  oszlopok =[
    {key:"name",texthu:"Név"},
    {key:"age", texthu:"Kor"},
    {key:"hair", texthu:"Hallyszínw"},
  ]

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
