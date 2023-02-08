import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInArrayComponent } from './search-in-array.component';

describe('SearchInArrayComponent', () => {
  let component: SearchInArrayComponent;
  let fixture: ComponentFixture<SearchInArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
