import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-show-form',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './show-form.component.html',
  styleUrl: './show-form.component.css'
})
export class ShowFormComponent {
  @Output()
  public createElement : EventEmitter<Show>= new EventEmitter();
  public onFormSubmit(form: NgForm):void{
    if(form.valid){
          const newShow: Show ={
              description:form.value.description,
              episodes:0,
              genre:"",
              image:form.value.image,
              likes:[],
              name:form.value.name,
              year:0
          }
          //Agregar el nuevo show PUSH pone
          //this.shows.push(newShow)
          //Emitir el evento al padre y pasarle el nuevo show a insertar
          this.createElement.emit(newShow);
          //Solo borra los campos reset todo el formulario resetForm
          form.resetForm()
      }else{
          console.log("Todos los campos son obligatorios");
      }
  }
}
