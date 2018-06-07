import {Stagiaire} from "./Stagiaire";
import {Formateur} from "./Formateur";

export class Formation {
    _name:String;
    _debut:String;
    _fin:String;
    _stagiaires:Array<Stagiaire>;
    _formateurs:Array<Formateur>;

    constructor(name:String,debut:String,fin:String,stagiaires:Array<Stagiaire>,formateurs:Array<Formateur>){
        this._name = name;
        this._debut = debut;
        this._fin = fin;
        this._stagiaires =stagiaires;
        this._formateurs = formateurs;
    }
}