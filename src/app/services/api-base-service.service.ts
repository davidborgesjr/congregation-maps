import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    URL = 'http://localhost:8000';
    constructor(private httpService: HttpClient){}

    protected getAll(entityUrl: string){
        return this.httpService.get<[]>(`${this.URL}/${entityUrl}`);
    }

    protected getById(entityUrl: string, id: string){
        return this.httpService.get(`${this.URL}/${entityUrl}/${id}`);
    }

}