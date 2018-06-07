import {expect} from 'chai';
import 'mocha';


import {Personne} from "../entite/Personne";
import {Certification} from "../entite/types";
import {Genre,Boisson,Religion,Trailer,Connaissance,TypeBoisson} from "../entite/types";
import {Stagiaire} from "../entite/Stagiaire";
import {Formateur} from "../entite/Formateur";
import {Film} from "../entite/Film";
import {Formation} from "../entite/Formation";

describe("creation d'un Film", () => {
    it('should create without error', function () {
            let film: Film = new Film(
                "12 Rounds 3: Lockdown", "Fri, 11 Sep 2015 00:00:00 -0700", "Lionsgate",
                "http://trailers.apple.com/trailers/lions_gate/12rounds3lockdown/images/poster.jpg",
                "/trailers/lions_gate/12rounds3lockdown/",
                "R",
                ["Action and Adventure"],
                "Stephen Reynolds",
                [
                    "Dean Ambrose",
                    "Roger Cross",
                    "Daniel Cudmore",
                    "Lochlyn Munro",
                    "Ty Olsson",
                    "Sarah Smyth"
                ],
                [
                    new Trailer(
                        "Mon, 27 Jul 2015 00:00:00 -0700",
                        "/trailers/lions_gate/12rounds3lockdown/",
                        "Trailer",
                        false,
                        true)
                ]);
            expect(film._title).to.equal("12 Rounds 3: Lockdown");
        }
    )
});


describe("creation d'une Formation",() => {
    it('should create a formation without error', function () {
        let formateurs =  new Array<Formateur>();
        let connaissances = new Array<Connaissance>();
        let boisson = new Boisson("coca",TypeBoisson.Bio);
        connaissances.push(new Connaissance("dta",5));

        let formateur = new Formateur(connaissances,"val",'LeMarie', Genre.Homme,boisson);
        formateurs.push(formateur);


        let stagiaires = new Array<Stagiaire>();
        let certif =  new Certification("java 8",2017)
        let stagiaire = new Stagiaire([certif],"eva","lewis",Genre.Femme,boisson);

        stagiaires.push(stagiaire);

        let formation =  new Formation("Diginamic JEE","2 avril 2018", "29 juin 2018",stagiaires,formateurs);
        expect(formation._name).to.equal("Diginamic JEE");
    });
});

describe("test d'une Personne" , ()=> {
    it('should describe a boison', function () {
        let boisson1 = new Boisson("coca",TypeBoisson.Bio);
        let personne1 =  new Personne("val1","LM",Genre.Homme,boisson1);
        let boisson2 = new Boisson("coca",TypeBoisson.Alcool);
        let personne2 =  new Personne("val2","LM",Genre.Homme,boisson2);
        let boisson3 = new Boisson("coca",TypeBoisson.BioAlcool);
        let personne3 =  new Personne("val3","LM",Genre.Homme,boisson3);
        expect(personne1._boire.toString()).to.equal("coca Bio");
        expect(personne2._boire.toString()).to.equal("coca Alcool");
        expect(personne3._boire.toString()).to.equal("coca Bio Alcool");
    });
});

describe("test d'une formateur" , ()=> {
    it('should return a tab of Formations with exp more 2 years', function () {

        let connaissances = new Array<Connaissance>();
        let boisson = new Boisson("coca",TypeBoisson.Bio);

        connaissances.push(new Connaissance("dta",5));
        connaissances.push(new Connaissance( "dta-new",1));

        let formateur = new Formateur(connaissances,"val",'LeMarie', Genre.Homme,boisson);

        expect(formateur.enseignementPlus2ans()[0].name).to.equal("dta");
    });
});
