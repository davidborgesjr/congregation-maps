import { Injectable } from "@angular/core";
import { ApiService } from "./api-base-service.service";
import { Observable } from "rxjs";
import { ITerritorio } from "../model/territorio.interface";

@Injectable({
    providedIn: 'root'
})
export class TerritorioApiService extends ApiService {

    private ENTITY_URL = 'territorios';

    getAllTerritorios(): Observable<ITerritorio[]>{
        return this.getAll(this.ENTITY_URL);
    }
    
}