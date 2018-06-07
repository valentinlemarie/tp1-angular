export enum Genre {
    Homme,
    Femme,
}

export enum Religion {
    Buddhism,
    Judaism,
    Islam,
    Catholicism,
    Atheist,
}

export enum TypeBoisson {
    Bio="Bio" ,
    Alcool="Alcool",
    BioAlcool="Bio Alcool",
}

export class Boisson  {
    constructor(
        public _name:String,
        public _boisson:TypeBoisson
    ) {

    }

    toString():string{
        return this._name+" "+this._boisson;
    }
}

export class Certification {
    constructor(
        public name:string,
        public anneeObtention:number
    ){

    }
}

export class Connaissance {
    constructor(
        public name:String,
        public anneeExperience:number
    ){

    }
    toString():string{
        return this.name+" "+this.anneeExperience;
    }
}

export class Trailer  {
    constructor(
        public postdate:String,
        public url:String,
        public type:String,
        public exclusive:boolean,
        public hd:boolean
    ){

    }
}