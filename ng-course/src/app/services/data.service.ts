import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class DataAppService {
  private totalLessons = new BehaviorSubject<number>(0);
  totalLessons$ = this.totalLessons.asObservable();

  updateTotalLessons(value: number): void {
    this.totalLessons.next(value);
  }
}
