import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Show } from './interfaces/show.interface';
import { NgFor, NgForOfContext, NgIf } from '@angular/common';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { ControlComponent } from "./components/control/control.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbNavModule, NgFor, ShowCardComponent, FormsModule, NgIf, ReactiveFormsModule, ShowFormComponent, ControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // public show: Show = {
  //   name : "BreakingBad",
  //   image:"https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=960&h=540",
  //   description: "Un profesor de química se convierte en fabricante de metanfetaminas después de ser diagnosticado con cáncer terminal."
  // };

  public name : string = ""

  //REACTIVO
  //form: FormGroup
  isFormSubmitted:boolean = false;


  //Nos sirve para crear elementos, eliminarlos o editarlos
  public shows: Show[] = 
    [
      {
          "name": "Breaking Bad",
          "year": 2008,
          "episodes": 62,
          "image": "https://hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg",
          "description": "Un profesor de química se convierte en fabricante de metanfetaminas después de ser diagnosticado con cáncer terminal.",
          "genre": "Drama",
          "likes": []
      },
      {
          "name": "Game of Thrones",
          "year": 2011,
          "episodes": 73,
          "image": "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
          "description": "Nobles familias luchan por el control del Trono de Hierro en el continente de Poniente.",
          "genre": "Fantasía",
          "likes": []
      },
      {
          "name": "Stranger Things",
          "year": 2016,
          "episodes": 34,
          "image": "https://images.ctfassets.net/4cd45et68cgf/22eaxyrfqLTOmD0ZgFJDX0/6d7b8a0f4c3130fd87c9921cbd11d180/image5.jpg?w=1200",
          "description": "Un grupo de niños descubre fenómenos sobrenaturales en su pequeña ciudad.",
          "genre": "Ciencia Ficción",
          "likes": []
      },
      {
          "name": "The Office",
          "year": 2005,
          "episodes": 201,
          "image": "https://m.media-amazon.com/images/I/91d053F2aKL._AC_UF894,1000_QL80_.jpg",
          "description": "Un documental sobre la vida cotidiana de los empleados en una oficina de ventas de papel.",
          "genre": "Comedia",
          "likes": []
      },
      {
          "name": "Friends",
          "year": 1994,
          "episodes": 236,
          "image": "https://www.debate.com.mx/__export/1698600791542/sites/debate/img/2023/10/29/friends.jpg_423682103.jpg",
          "description": "Seis amigos navegan por la vida y el amor en Nueva York.",
          "genre": "Comedia",
          "likes": []
      },
      {
          "name": "The Mandalorian",
          "year": 2019,
          "episodes": 24,
          "image": "https://m.media-amazon.com/images/I/71bBDuXUvOL._AC_UF894,1000_QL80_.jpg",
          "description": "Un cazarrecompensas mandaloriano navega por la galaxia lejos de la autoridad de la Nueva República.",
          "genre": "Ciencia Ficción",
          "likes": []
      },
      {
          "name": "The Witcher",
          "year": 2019,
          "episodes": 24,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfdUzjdZLK_9v2nmaabc5wsJydbBp2fBMsA&s",
          "description": "Un cazador de monstruos a sueldo lucha por encontrar su lugar en un mundo donde las personas son a menudo más perversas que las bestias.",
          "genre": "Fantasía",
          "likes": []
      },
      {
          "name": "Sherlock",
          "year": 2010,
          "episodes": 13,
          "image": "https://m.media-amazon.com/images/I/819HOj9kDsL._AC_UF894,1000_QL80_.jpg",
          "description": "Una versión moderna de las aventuras de Sherlock Holmes, el detective más famoso de Londres.",
          "genre": "Crimen",
          "likes": []
      },
      {
          "name": "Black Mirror",
          "year": 2011,
          "episodes": 22,
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR18nRzxB8FaQ4DdYj2ngYYctmieXmeTFZOw&s",
          "description": "Una serie de antología que explora una visión retorcida y oscura del futuro próximo y la tecnología.",
          "genre": "Ciencia Ficción",
          "likes": []
      },
      {
          "name": "Rick and Morty",
          "year": 2013,
          "episodes": 51,
          "image": "https://m.media-amazon.com/images/I/81CwjScs2aL._AC_UF894,1000_QL80_.jpg",
          "description": "Las aventuras interdimensionales del científico loco Rick y su nieto Morty.",
          "genre": "Animación",
          "likes": []
      },
      {
          "name": "The Crown",
          "year": 2016,
          "episodes": 40,
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59luKIIdI17uKygRpnmFaJz944eoVqN6v2A&s",
          "description": "La historia del reinado de la Reina Isabel II y los eventos que dieron forma a la segunda mitad del siglo XX.",
          "genre": "Drama",
          "likes": []
      },
      {
          "name": "Money Heist",
          "year": 2017,
          "episodes": 41,
          "image": "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg",
          "description": "Un grupo de delincuentes planea y ejecuta el mayor atraco de la historia en la Fábrica Nacional de Moneda y Timbre de España.",
          "genre": "Crimen",
          "likes": []
      },
      {
          "name": "The Simpsons",
          "year": 1989,
          "episodes": 700,
          "image": "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
          "description": "Las desventuras de una familia disfuncional en la ciudad de Springfield.",
          "genre": "Animación",
          "likes": []
      },
      {
          "name": "House of Cards",
          "year": 2013,
          "episodes": 73,
          "image": "https://upload.wikimedia.org/wikipedia/en/0/0b/House_of_Cards_season_1.png",
          "description": "Un despiadado político y su esposa hacen todo lo necesario para alcanzar y mantener el poder.",
          "genre": "Drama",
          "likes": []
      },
      {
          "name": "Better Call Saul",
          "year": 2015,
          "episodes": 63,
          "image": "https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
          "description": "La historia del abogado Jimmy McGill antes de convertirse en Saul Goodman, el abogado de Walter White.",
          "genre": "Drama",
          "likes": []
      },
      {
          "name": "The Big Bang Theory",
          "year": 2007,
          "episodes": 279,
          "image": "https://m.media-amazon.com/images/I/81ksNXITStL._AC_UF894,1000_QL80_.jpg",
          "description": "Las vidas de cuatro científicos y sus interacciones sociales, especialmente con su vecina Penny.",
          "genre": "Comedia",
          "likes": []
      }
  ];

 // constructor(){
    //Para hacer la eliminacion por parametro
    //this.shows.splice(0,1)
    //Justo el que quiero eliminar por nombre
    //this.shows=this.shows.filter(show=>show.name != "The Big Bang Theory")
  //}

//ELimina por el nombre
  public deleteElement(name:string):void{
    this.shows=this.shows.filter(show=>show.name !== name) 
  }

  public editElement(show: Show):void{
    this.shows.push(show)
  }

//NGMODELE SOLO PARA CUANDO SEA UN CAMPO
  //Generar un nuevo elemento
//   public createElement():void{
//     console.log(this.name);
//     const newShow: Show ={
//         description:"",
//         episodes:0,
//         genre:"",
//         image:"",
//         likes:[],
//         name:this.name,
//         year:0
//     }
//     //Agregar el nuevo show PUSH pone
//     this.shows.push(newShow)
//     this.name=""
//   }

//Forms por plantillas
//Tenemos varios campos, cuando solo se quiere acceder a ciertos campos
    public createElement(show: Show):void{
        this.shows.push(show)
        // console.log(form);
        // if(form.valid){
        //     const newShow: Show ={
        //         description:form.value.description,
        //         episodes:0,
        //         genre:"",
        //         image:form.value.image,
        //         likes:[],
        //         name:form.value.name,
        //         year:0
        //     }
        //     //Agregar el nuevo show PUSH pone
        //     this.shows.push(newShow)
        //     //Solo borra los campos reset todo el formulario resetForm
        //     form.resetForm()
        // }else{
        //     console.log("Todos los campos son obligatorios");
        // }

    }

// Forms reactivos IMPORTAR REACTIVEFORMSMODULE
//Muchas validaciones form grande
// Todo es ts y no en html
    //Inicializacion
    // constructor(){
    //     this.form = new FormGroup({
    //         name: new FormControl('', [Validators.required]),
    //         description: new FormControl('', [Validators.required]),
    //         image: new FormControl('', [Validators.required]),
    //     })
    // }
    // public createElement():void{
    //     //console.log(this.form.valid);
    //     //console.log('form submitted', this.isFormSubmitted)
    //     this.isFormSubmitted=true;
    //     if(this.form.valid){
    //         const newShow: Show ={
    //             description:this.form.value.description,
    //             episodes:0,
    //             genre:"",
    //             image:this.form.value.image,
    //             likes:[],
    //             name:this.form.value.name,
    //             year:0
    //         }
    //         //Agregar el nuevo show PUSH pone
    //         this.shows.push(newShow)
    //         //Solo borra los campos reset, todo el formulario resetForm
    //         this.form.reset()
    //         this.isFormSubmitted=false;
    //     }else{
    //         console.log("Todos los campos son obligatorios");
    //     }
    // }

    public ordenAlfabetico():void{
        this.shows.sort((a,b)=>{return a.name.localeCompare(b.name)})
    }

   public ordenAno():void{
    this.shows.sort((a,b)=>{return a.year-b.year})
   }

   public ordenEpisodios():void{
    this.shows.sort((a,b)=>{return a.episodes-b.episodes})
   }

   public updateElement(updatedShow: Show):void{
        const index = this.shows.findIndex(s => s.name === updatedShow.name);
        // Verifica si el show existe
        if (index !== -1) {
            // Actualiza los datos del show
            this.shows[index] = updatedShow;
        } else {
            console.error('Show no encontrado');
        }
    }
}
