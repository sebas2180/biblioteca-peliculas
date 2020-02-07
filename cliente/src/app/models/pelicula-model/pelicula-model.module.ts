
export class PeliculaModelModule {
  id: number;
  titulo: string;
  anio: number;
  ibdm: number;
  ranking: number;
  votos: number;
  descripcion: string;
  url: string;
  create_at: Date;

  constructor(id: number, titulo: string, anio: number, ibdm?: number, ranking?: number,
              votos?: number, descripcion?: string, url?: string, create_at?: Date) {
    this.id  = id;
    this.titulo = titulo;
    this.anio = anio;
    this.ibdm = ibdm || 0;
    this.ranking = ranking || 0;
    this.votos = votos || 0 ;
    this.descripcion = descripcion || '';
    this.url = url || '';
    this.create_at = create_at || new Date();
  }
  public voteUp() {
    this.votos++;
  }
  public voteDown() {
    this.votos--;
  }

}
