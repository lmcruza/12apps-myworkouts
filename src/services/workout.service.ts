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

    addWorkout(workout){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.workoutsUrl+'?apiKey='+this.apiKey, JSON.stringify(workout), {headers})
            .map(res => res.json());
    }

    deleteWorkout(workoutId){
        return this._http.delete(this.workoutsUrl+'/'+workoutId+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }

}