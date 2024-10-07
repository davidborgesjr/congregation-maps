import { Injectable } from "@angular/core";
import { ApiService } from "./api-base-service.service";
import { Observable } from "rxjs";
import { IDirigente } from "../model/dirigente.interface";

@Injectable({
    providedIn: 'root'
})
export class DirigentesApiService extends ApiService {

    private ENTITY_URL = 'dirigentes';

    getAllDirigentes(): Observable<IDirigente[]>{
        return this.getAll(this.ENTITY_URL);
    }
    
}