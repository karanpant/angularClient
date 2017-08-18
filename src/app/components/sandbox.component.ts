import { Component } from '@angular/core';
import { Customer } from './Customer';
@Component({
    selector: 'sandbox',
    template: `<h1>Hello {{ name }}.</h1>`
})

export class SandboxComponent {
   customer:Customer
   customers:Customer[];
   constructor(){
       this.customer = {
           id:1,
           name:'karna',
           email:'karna@gmail.com'
       }

       this.customers = [
           {
            id:1,
            name:'Karan',
            email:'karan@gmail.com'   
           },
           {
            id:2,
            name:'Rohan',
            email:'rohan@gmail.com'
           },
           {
            id:3,
            name:'Rohn',
            email:'rohn@gmail.com'
           }
       ]
   }
    
}


