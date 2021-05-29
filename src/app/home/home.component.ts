import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, debounceTime, startWith, switchMap, tap,} from 'rxjs/operators';
import { NominatimResponse } from '../models/nominatim.model';
import { NominatimService } from '../services/nominatim.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  readonly searchForm:FormGroup = this.getForm();
  readonly foundedResults$ = new BehaviorSubject<NominatimResponse[]>([]);
  constructor(private fb: FormBuilder, private nominatimService:NominatimService) { 
  }
  ngOnInit() {
    this.searchForm.valueChanges
    .pipe(
      startWith({
        searchInput: "", country: this.searchForm.get("country")?.value
      }),
      debounceTime(500),
      switchMap((formValue: {searchInput: string, country: string}) => {
        return this.nominatimService.search(formValue.searchInput, formValue.country);
      }),
      catchError((error) => {
        return throwError('Not found...')
      })
    ).subscribe(response => {
        if(response) this.foundedResults$.next(response);
    });
  }
  getForm() {
    return this.fb.group({
      searchInput: '',
      country: 'Ukraine'
    })
  }
}
