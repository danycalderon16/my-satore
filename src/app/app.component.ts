import { Component } from '@angular/core';
import { Product } from './product.model'
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   widthImg = 10;
   name = 'Daniel';
   age = 22;
   img = 'https://i.imgur.com/Ipv33Vy.jpeg';
   btnDisable = true;
   register = {
      name:'',
      email:'',
      password:''
   };
   person = {
      name: 'Daniel',
      age: 22,
      img: 'https://i.imgur.com/Ipv33Vy.jpeg',
   };

   names: string[] = ['Daniel', 'Cristiano', 'Leones'];
   newName = '';
   box = {
      width:100,
      height:100,
      background:'red'
   };

   products:Product[] = [
      {
         name: 'Eñ mejor juguete',
         price: 565,
         image: './assets/images/toy.jpg',
         category: 'all',
      },
      {
         name: 'Bicicleta casi nueva',
         price: 356,
         image: './assets/images/bike.jpg'
      },
      {
         name: 'Colleción de álbumnes',
         price: 34,
         image: './assets/images/album.jpg'
      },
      {
         name: 'Mis libros',
         price: 23,
         image: './assets/images/books.jpg'
      },
      {
         name: 'Casa para perro',
         price: 34,
         image: './assets/images/house.jpg'
      },
      {
         name: 'Gafas',
         price: 3434,
         image: './assets/images/glasses.jpg'
      }
   ]

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
   changeName(event: Event) {
      const element = event.target as HTMLInputElement
      this.person.name = element.value
   }

   addName() {
      this.names.push(this.newName);
      this.newName = '';
   }
   deleteName(index: number) {
      this.names.splice(index, 1);
   }
   onRegister(){
      console.log(this.register);
   }
}
