import { CommonModule } from "@angular/common";
import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ITerritorio } from "../../model/territorio.interface";
import { MatInputModule } from "@angular/material/input";

@Component({
    selector: 'formulario-quadras',
    standalone: true,
    imports: [
      ReactiveFormsModule, 
      CommonModule,
      FormsModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule
    ],
    providers: [],
    templateUrl: './formulario-quadras.component.html',
    styleUrl: './formulario-quadras.component.scss'
  })
  export class FormularioQuadrasComponent implements OnChanges{
    form!: FormGroup;

    @Input()
    territorioSelecionado!: ITerritorio;
    
    get listaQuadras() {
      return this.form.get('listaQuadras') as FormArray;
    }

    constructor(private formBuilder: FormBuilder){}

    ngOnChanges(changes: SimpleChanges): void {
      if(changes['territorioSelecionado'].currentValue){
        this.gerarForm();
        this.gerarQuadras();
      }
    }

    private criarQuadra(numero: number) {
      return this.formBuilder.group({
        numero: [numero],
        observacoes: [""],
        trabalhado: [false]
      })
    }
  
    private adicionarQuadra(numero: number) {
      this.listaQuadras.push(this.criarQuadra(numero));
    }

    private gerarForm(){
      this.form = this.formBuilder.group({
        territorioId: this.territorioSelecionado.id,
        listaQuadras: this.formBuilder.array([])
      })      
    }
  
    private gerarQuadras(){    
      const { numeroQuadras} = this.territorioSelecionado;
      for(let i = 1; i <= numeroQuadras; i++){
        this.adicionarQuadra(i);
      };
    }


    printValue(){
      console.log(this.form.value)
    }
  }
