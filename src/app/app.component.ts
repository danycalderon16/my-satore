import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   name = 'Daniel';
   age = 22;
   img = 'https://i.imgur.com/Ipv33Vy.jpeg';
   btnDisable = true;

   person = {
      name: 'Daniel',
      age: 22,
      img: 'https://i.imgur.com/Ipv33Vy.jpeg',
   }

   names: string[] = ['Daniel', 'Cristiano', 'Leones'];
   newName = '';

   toggleButton() {
      this.btnDisable = !this.btnDisable
   }

   increaseAge() {
      this.person.age += 1;
   }

   onScroll(event: Event) {
      const element = event.target as HTMLElement
      console.log(element.scrollTop);
   }
   changeName(event:Event){
      const element = event.target as HTMLInputElement
      this.person.name = element.value
   }

   addName(){
      this.names.push(this.newName);
      this.newName = '';
   }
   deleteName(index:number){
      this.names.splice(index,1);
   }
}
