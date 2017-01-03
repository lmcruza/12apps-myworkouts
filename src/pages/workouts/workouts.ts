import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { WorkoutService } from '../../services/workout.service';
import { WorkoutDetailsPage } from '../workout-details/workout-details';

@Component({
    selector: 'workouts',
    templateUrl: 'workout.html',
    providers: [WorkoutService]
})
export class WorkoutsPage implements OnInit {

    workouts:any[];

    constructor(public navCtrl: NavController, private _workoutService:WorkoutService) {
        this._workoutService.getWorkouts()
            .subscribe(workouts => {
                this.workouts = workouts;
            });
    }

    ngOnInit() {
        this._workoutService.getWorkouts()
            .subscribe(workouts => {
                this.workouts = workouts;
            });
    }

    workoutSelected(event, workout){
        this.navCtrl.push(WorkoutDetailsPage, {
            workout: workout
        });
    }
}