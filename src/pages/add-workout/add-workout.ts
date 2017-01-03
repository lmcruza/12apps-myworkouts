import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { WorkoutService } from '../../services/workout.service';
import { WorkoutsPage } from '../workouts/workouts';

@Component({
    selector: 'add-workout',
    templateUrl: 'add-workout.html',
    providers: [WorkoutService]
})
export class AddWorkoutPage implements OnInit {

    title: string;
    note: string;
    type: string;
    result: string;

    constructor(public navCtrl: NavController, private _workoutService:WorkoutService) { }

    ngOnInit() { }

    onSubmit() {
        var workout = {
            title: this.title,
            note: this.note,
            type: this.type
        }
        this._workoutService.addWorkout(workout).subscribe(data => {
            this.result = data
        }, err => console.log(err), () => console.log('Workout Added'));

        this.navCtrl.setRoot(WorkoutsPage);
    }
}