import { NgModule } from "@angular/core";
import { ApiService } from "./api-base-service.service";
import { TerritorioApiService } from "./territorios-api.service";
import { DirigentesApiService } from "./dirigentes-api.service";

@NgModule({
  providers: [
    ApiService, 
    TerritorioApiService, 
    DirigentesApiService
  ],
  })
  export class ServicesModule { }