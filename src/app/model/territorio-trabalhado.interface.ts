export interface IQuadraTrablhada {
    terminado: boolean,
    observacoes: String,
    dataInicio: Date,
    dataTermino: Date
}

export interface ITerritorioTrabalhado {
    territorioId: string,
    quadras: String,
    numeroQuadras: IQuadraTrablhada[]
  }