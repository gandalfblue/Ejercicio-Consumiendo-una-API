import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterInterface } from './characterInterface';

@Injectable({
    providedIn:'root'
})

export class CharacterService {

    baseUrl: string;

    constructor(private http: HttpClient){
        this.baseUrl = 'https://naruto-api.herokuapp.com/api/v1/characters';
    }

    getDatails(): Observable<CharacterInterface[]> {

        return this.http.get<CharacterInterface[]>(`${this.baseUrl}`);
    }
}
