import { Injectable } from "@angular/core";
import { ApiService } from "./api-base-service.service";
import { Observable } from "rxjs";
import { ITerritorioTrabalhado } from "../model/territorio-trabalhado.interface";

@Injectable({
    providedIn: 'root'
})
export class TerritoriosTrabalhadosApiService extends ApiService {

    private ENTITY_URL = 'territorios-trabalhados';

    getAllTerritoriosTrabalhados(): Observable<ITerritorioTrabalhado[]>{
        return this.getAll(this.ENTITY_URL);
    }

    getTerritorioTrabalhado(territorioId: string): Observable<ITerritorioTrabalhado>{
        return this.getById(this.ENTITY_URL, territorioId) as Observable<ITerritorioTrabalhado>;
    }
    
}