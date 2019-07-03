import { Component, OnInit } from '@angular/core';
import { PectoralService } from '../shared/Services/pectoral.service';
import { Exercise } from '../shared/models/exercise';

@Component({
  selector: 'app-chest',
  templateUrl: './chest.component.html',
  styleUrls: ['./chest.component.css']
})
export class ChestComponent implements OnInit {

  exercises: Exercise[];

  constructor(private service: PectoralService) { }

  ngOnInit() {
    this.service.getExercises().subscribe(exercises => {
      this.exercises = exercises;
    });
  }
}
