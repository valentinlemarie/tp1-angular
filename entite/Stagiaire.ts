import {Personne} from "./Personne";
import {Certification} from "./types";
import {Genre,Boisson,Religion} from "./types";

export class Stagiaire extends Personne{
    _certifications:Array<Certification>;
    constructor(certifications:Array<Certification>,prenom:String,nomDeFammille:String, genre:Genre,boire:Boisson, religion?:Religion){
        super(prenom,nomDeFammille, genre,boire,religion);
        this._certifications = certifications
    }
}