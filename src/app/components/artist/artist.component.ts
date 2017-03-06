import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Album} from '../../models/album'
import {Artist} from '../../models/artist'
import {SpotifyService} from '../../services/spotify.service'
@Component({
    moduleId:module.id,
    templateUrl: `artist.component.html`,
    selector:'artist'
})
export class ArtistComponent implements OnInit{
    private id:string;
    private albums:Album[];
    private artist:Artist;
    constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute) {}
    
    ngOnInit(){
        this._route.params
            .map(params=>params['id'])
            .subscribe((id)=>{
                this._spotifyService.getArtist(id)
                .subscribe(result=>{
                    this.artist=result;
                })
                this._spotifyService.getAlbums(id)
                .subscribe(result=>{
                    this.albums=result.items;
                })
            })
    }

}