export interface IOpcaoTerritorio {
    numero: number,
    localidade: String,
}
  
export interface ITerritorio extends IOpcaoTerritorio {
    id: string,
    imageSrc: String,
    numeroQuadras: number
  }