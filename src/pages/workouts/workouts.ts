import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { WorkoutService } from '../../services/workout.service';

@Component({
    selector: 'workouts',
    templateUrl: 'workout.html',
    providers: [WorkoutService]
})
export class WorkoutsPage implements OnInit {

    constructor(private _workoutService:WorkoutService) {
    }

    ngOnInit() {
        this._workoutService.getWorkouts()
            .subscribe(workouts => {
                console.log(workouts);
            })
    }
}