import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../models/artist';
@Component({
    moduleId:module.id,
    selector: 'search',
    templateUrl: `search.component.html`,
})
export class SearchComponent  {
    private searchString:string;
    private searchedResults:Artist[];

    constructor(private _spotifyService:SpotifyService) {}
    searchArtist(){
        if(this.searchString){
            this._spotifyService.searchMusic(this.searchString).subscribe(result=>{
                this.searchedResults=result.artists.items;
            });                
        }
        this.searchedResults = null;      
    }
}
