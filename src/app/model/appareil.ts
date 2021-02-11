export class Appareil{
  public id:number;
  public name:string;
  public status:string;

  public constructor(id:number,name:string,statut:string){
    this.id=id;
    this.name=name;
    this.status=statut;
  }
}
