import { Component, EventEmitter, Output } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {
  @Output() ordenAlfabetico = new EventEmitter<void>()
  @Output() ordenAno = new EventEmitter<void>()
  @Output() ordenEpisodios = new EventEmitter<void>()

  public ordenarEpisodiosClick(): void {
    this.ordenEpisodios.emit();
  }
  public ordenarAnoClick(): void {
    this.ordenAno.emit();
  }
  public ordenarAlfabeticoClick(): void {
    this.ordenAlfabetico.emit();
  }
}
