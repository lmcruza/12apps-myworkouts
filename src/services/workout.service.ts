import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService {

    apiKey: string;
    workoutsUrl: string;

    constructor(private _http:Http) {
        this.apiKey = '0-KiPOJoTXFlsvlHLF1SeTB4JCsqNa2w';
        this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkoutsapp/collections/workouts';
    }

    getWorkouts(){
        return this._http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }

}