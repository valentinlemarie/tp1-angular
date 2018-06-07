import {Genre,Boisson,Religion,TypeBoisson} from "./types";


export class Personne {
    _prenom:String;
    _nomDeFammille:String;
    _genre:Genre;
    _boire:Boisson;
    private _relegion:Religion|undefined;
     constructor(prenom:String,nomDeFammille:String, genre:Genre,boire:Boisson, religion?:Religion){
         this._prenom = prenom;
         this._nomDeFammille = nomDeFammille;
         this._genre = genre;
         this._relegion = religion;
         this._boire = boire;
     }


    boit(){
        if(this._boire._boisson == TypeBoisson.Bio ){
            console.log("La boisson "+this._boire._name+" est naturelle");
        }
        if(this._boire._boisson == TypeBoisson.Alcool ){
            console.log("La boisson "+this._boire._name+" est alcoolisée");
        }
        if(this._boire._boisson == TypeBoisson.BioAlcool ){
            console.log("La boisson "+this._boire._name+" est naturelle et alcoolisée");
        }
    }
     toString():String{
         return "${this._prenom} ${this._nomDeFammille}";
     }
}





