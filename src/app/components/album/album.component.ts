import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Album} from '../../models/album'
import {Artist} from '../../models/artist'
import {SpotifyService} from '../../services/spotify.service'
@Component({
    moduleId:module.id,
    templateUrl: `album.component.html`,
    selector:'album'
})
export class AlbumComponent{
    private id:string;
    private album:Album;
    constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute) {}
    
    ngOnInit(){
        this._route.params
            .map(params=>params['id'])
            .subscribe((id)=>{
                this._spotifyService.getAlbum(id)
                .subscribe(result=>{
                    this.album=result;
                })
            })
    }
}