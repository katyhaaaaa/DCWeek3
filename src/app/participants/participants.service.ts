import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  getParticipants(){
      return [
          {name: "Ma. Jessa Bacolod", age:22 + " years old", gender: "Female"},
          {name: "Jackelyn Jose", age:18 + " years old", gender: "Female"},
          {name: "Manny Gbasay", age:30 + " years old", gender: "Male"},
          {name: "Denber Nagets", age:42 + " years old", gender: "Male"},
          {name: "Cardo Dalisay", age:35 + " years old", gender: "Male"},
          {name: "Sandara Lemonjuz", age:25 + " years old", gender: "Female"},
          {name: "Pok Wang", age:40 + " years old", gender: "Female"},
          {name: "Sham Man", age:24 + " years old", gender: "Female"},
          {name: "Lindon Dol", age:20 + " years old", gender: "Male"},
          {name: "Ced Rikk", age:29 + " years old", gender: "Male"},
          {name: "Charles Angel", age:38 + " years old", gender: "Male"},
      ];
  }
}
