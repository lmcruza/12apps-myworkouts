import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { WorkoutService } from '../../services/workout.service';
import { WorkoutsPage } from '../workouts/workouts';

@Component({
    selector: 'workout-details',
    templateUrl: 'workout-details.html',
    providers: [WorkoutService]
})
export class WorkoutDetailsPage implements OnInit {

    workout: any;
    result: string;
    
    constructor(public navCtrl: NavController, public navParams:NavParams, private _workoutService:WorkoutService) { }

    ngOnInit() {
        this.workout = this.navParams.get('workout');
    }

    deleteWorkout(workoutId){
        this._workoutService.deleteWorkout(workoutId).subscribe(data => {
            this.result = data
        }, err => console.log(err), () => console.log('Workout Deleted'));

        this.navCtrl.setRoot(WorkoutsPage);
    }
}