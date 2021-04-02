import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


export interface SearchParams {
  name: string; 
  types:string;
}

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  @Output()
  // Evenement avec des valeurs de format SearchParams
  search = new EventEmitter<SearchParams>();
  
  searchForm = new FormGroup({
    name: new FormControl(''),
    types: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    this.searchForm.valueChanges.subscribe((value) => {
        this.search.emit(value);
      });
  }

}