import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterOutlet } from '@angular/router';
import { FormularioBaseComponent } from './pages/formulario-base/formulario-base.component';
import { ITerritorio } from './model/territorio.interface';
import { ServicesModule } from './services/services.module';
import { FormularioQuadrasComponent } from './pages/formulario-quadras/formulario-quadras.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormularioBaseComponent,
    FormularioQuadrasComponent,
    RouterOutlet, 
    ReactiveFormsModule, 
    CommonModule, 
    FormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    ServicesModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'congregation-maps';
  form!: FormGroup;
  isSelected = false;
  
  territorioSelecionado!: ITerritorio;

  constructor(){}

  onTerritorioSelecionado(evento: ITerritorio){
    this.territorioSelecionado = {...evento};
  }

}
