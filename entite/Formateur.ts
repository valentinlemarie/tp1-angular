import {Personne} from "./Personne";
import {Connaissance,Boisson,Religion,Genre} from "./types";

export class Formateur extends Personne{
    private _connaissances:Array<Connaissance>
    constructor(connaissances:Array<Connaissance>,prenom:String,nomDeFammille:String, genre:Genre,boire:Boisson, religion?:Religion){
        super(prenom,nomDeFammille, genre,boire,religion);
        this._connaissances= connaissances;
    }


    enseignementPlus2ans():Array<Connaissance>{
        let list = new Array<Connaissance>();
        for (let entry of this._connaissances) {
            if(entry.anneeExperience>=2){
                list.push(entry);
            }
        }
        return list;
    }
}