import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDirectoryComponent } from './country-directory.component';

describe('CountryDirectoryComponent', () => {
  let component: CountryDirectoryComponent;
  let fixture: ComponentFixture<CountryDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
