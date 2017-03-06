import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService{
    private searchUrl:string;
    private searchArtistUrl:string;
    private searchAlbumsUrl:string;
    private searchAlbumUrl:string;

    constructor(private _http:Http) {}
    searchMusic(searchString:string){
        this.searchUrl='https://api.spotify.com/v1/search?query='+searchString+
        '&offset=0&limit=20&type=artist&market=US';
        return this._http.get(this.searchUrl).map(res=>res.json());
    }
    getArtist(searchId:string){
        this.searchArtistUrl='https://api.spotify.com/v1/artists/'+searchId;
        return this._http.get(this.searchArtistUrl).map(res=>res.json());
    }
    getAlbums(artistId:string){
        this.searchAlbumsUrl='https://api.spotify.com/v1/artists/'+artistId+'/albums';
        return this._http.get(this.searchAlbumsUrl).map(res=>res.json());
    }
    getAlbum(albumId:string){
        this.searchAlbumUrl='https://api.spotify.com/v1/albums/'+albumId;
        return this._http.get(this.searchAlbumUrl).map(res=>res.json());
    }    

}