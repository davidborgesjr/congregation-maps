import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideNativeDateAdapter } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectChange, MatSelectModule } from "@angular/material/select";
import { IOpcaoTerritorio, ITerritorio } from "../../model/territorio.interface";
import { IDirigente } from "../../model/dirigente.interface";
import { TerritorioApiService } from "../../services/territorios-api.service";
import { DirigentesApiService } from "../../services/dirigentes-api.service";
import { TerritoriosTrabalhadosApiService } from "../../services/territorios-trabalhados.api.service";

@Component({
    selector: 'formulario-base',
    standalone: true,
    imports: [
      ReactiveFormsModule, 
      CommonModule, 
      FormsModule,
      MatFormFieldModule, 
      MatInputModule,
      MatSelectModule,
      MatDatepickerModule,
    ],
    providers: [provideNativeDateAdapter()],
    templateUrl: './formulario-base.component.html',
    styleUrl: './formulario-base.component.scss'
  })
  export class FormularioBaseComponent implements OnInit {
    form!: FormGroup;
    @Output() territorioSelecionado = new EventEmitter();
    territorioEscolhido!: ITerritorio;
    listaTerritorios!: IOpcaoTerritorio[];
    dirigentes!: IDirigente[];
    territorios!: ITerritorio[];

    constructor(
        private apiTerritorio: TerritorioApiService,
        private apiDirigentes: DirigentesApiService,
        private apiTerritoriosTrabalhados: TerritoriosTrabalhadosApiService,
        private formBuilder: FormBuilder
    ){}
   
    ngOnInit(): void {
        this.carregarTerritorios();
        this.carregarDirigentes();
        this.createForm();
    }
    
    onChangeOpcaoTerritorio(event: MatSelectChange){
        this.territorioEscolhido = {... this.territorios.find(territorio => territorio.numero === event.value)} as ITerritorio;
        this.territorioSelecionado.emit(this.territorioEscolhido);
        this.carregarDadosTerritoriosTrabalhados(this.territorioEscolhido.id)
    }
    
    getNomeQuadra({numero, localidade}: IOpcaoTerritorio){
        return `Número ${numero} - ${localidade}`
    }

    private carregarDadosTerritoriosTrabalhados(territorioId: string){
      this.apiTerritoriosTrabalhados
      .getTerritorioTrabalhado(territorioId)
        .subscribe(dadosTerritorioTrabalhado => {
          if(dadosTerritorioTrabalhado){
            console.log(dadosTerritorioTrabalhado);
          }else {
            console.log('EMPTY')
          }
        })
    }

    private carregarTerritorios(){
        this.apiTerritorio
            .getAllTerritorios()
            .subscribe(
              listaTerritorios => {
                this.territorios = listaTerritorios;
                this.listaTerritorios = this.territorios
                    .map(({numero, localidade}) => {return {numero, localidade}})
            },
          
          )
    }

    
    private carregarDirigentes(){
        this.apiDirigentes.getAllDirigentes()
        .subscribe(listaDirigentes => this.dirigentes = listaDirigentes)
    }

      
  private createForm(){
    this.form = this.formBuilder.group({
      nomeDirigente: [],
      numeroMapa: [],
      dataInicio: [],
      dataTermino: [],
    });
  }


  }