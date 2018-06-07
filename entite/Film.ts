import {Trailer} from "./types";

export class Film {

    _title:String;
    _releasedate:String;
    _studio:String;
    _poster:String;
    _location:String;
    _rating:String;
    _genre:Array<String>;
    _directors:String;
    _actors:Array<string>;
    _trailers:Array<Trailer>;

    constructor(title:String,releasedate:String,studio:String,poster:String,location:String,rating:String,genre:Array<String>,directors:String,actors:Array<string>,trailers:Array<Trailer>){
        this._title = title;
        this._releasedate = releasedate;
        this._studio =studio;
        this._poster=poster;
        this._location = location;
        this._rating =rating;
        this._genre =genre;
        this._directors =directors;
        this._actors = actors;
        this._trailers =trailers;
    }
}