import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
    moduleId:module.id,
    selector: 'search',
    templateUrl: `search.component.html`,
})
export class SearchComponent  {
    private searchString:string;
    constructor(private _spotifyService:SpotifyService) {}
    searchArtist(){
        this._spotifyService.searchMusic(this.searchString).subscribe(result=>{
            console.log(result);
        });          
    }
}
