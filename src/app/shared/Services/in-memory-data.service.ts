import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pectoralExercises = [
      { id: 1, exerciseName: 'Barbell Bench Press', exerciseDescription: 'Classic exercise' },
      { id: 2, exerciseName: 'Flat Bench Dumbbell Press', exerciseDescription: 'Classic exercise' },
      { id: 3, exerciseName: 'Low-Incline Barbell Bench Press', exerciseDescription: 'Classic exercise' },
      { id: 4, exerciseName: 'Machine Decline Press ', exerciseDescription: 'Classic exercise' },
      { id: 5, exerciseName: 'Seated Machine Chest Press  ', exerciseDescription: 'Classic exercise' },
      { id: 6, exerciseName: 'Incline Dumbbell Press  ', exerciseDescription: 'Classic exercise' },
      { id: 7, exerciseName: 'Dips For Chest', exerciseDescription: 'Classic exercise' },
      { id: 8, exerciseName: 'Incline Bench Cable Fly', exerciseDescription: 'Classic exercise' },
      { id: 9, exerciseName: 'Incline Dumbbell Pull-Over', exerciseDescription: 'Classic exercise' },
      { id: 10, exerciseName: 'Pec-Deck Machine', exerciseDescription: 'Classic exercise' }
    ];
    return { pectoralExercises };
  }

  // Overrides the genId method to ensure that a exercise always has an id.
  // If the pectoralExercises array is empty,
  // the method below returns the initial number (11).
  // if the pectoralExercises array is not empty, the method below returns the highest
  // hero id + 1.
  genId(pectoralExercises: Exercise[]): number {
    return pectoralExercises.length > 0 ? Math.max(...pectoralExercises.map(exercise => exercise.id)) + 1 : 11;
  }
}
