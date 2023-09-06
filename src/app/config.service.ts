import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  oszlopok =[
    {key:"name",texthu:"Név", type:"plain"},
    {key:"age", texthu:"Kor", type:"number"},
    {key:"hair", texthu:"Hallyszínw", type:"text"},
  ]
  constructor() { }

  getOszlopok(){
    return this.oszlopok;
  }
}
