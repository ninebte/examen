import { Component, EventEmitter, Input, Output, inject,TemplateRef } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgClass, NgIf } from '@angular/common';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [NgIf , NgClass, NgbDatepickerModule,FormsModule],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {
  // @Input()
  // public name: string = "Breaking Bad"

  // @Input()
  // public description: string = "Hola"

  // @Input()
  // public image: string="https://hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg"
  @Output()//Hijo al padre
  public deleteCard: EventEmitter<string> = new EventEmitter
  // public editCard: EventEmitter<string> = new EventEmitter
  @Output()
  public updateElement : EventEmitter<Show>= new EventEmitter();
  
  @Input() //PAdre al hijo
  public show: Show = {
    name: "",
    description: "",
    image: "",
    year: 0,
    episodes: 0,
    genre: "",
    likes:[]
  }

  public isSelected: boolean = false;
  public changeSelected(): void{
    this.isSelected = !this.isSelected;
  }

  public onDeleteCard(){
    this.deleteCard.emit(this.show.name);
  }
  
  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}

  
  public editShow(form: NgForm):void{
          console.log(this.show.name)
          const updateShow: Show ={
              ...this.show,
              description: form.value.description,
              image: form.value.image,
              name: form.value.name,
          }
          //NO PASA BIEN VALORES DEL FORMULARIO
          console.log(form.value.name)
          console.log(form.value.description)
          //Agregar el nuevo show PUSH pone
          //this.shows.push(newShow)
          //Emitir el evento al padre y pasarle el nuevo show a insertar
          this.updateElement.emit(updateShow);
          //this.editCard();
          //Solo borra los campos reset todo el formulario resetForm
          form.resetForm()
  }

}
