import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonshellComponent } from './commonshell.component';

describe('CommonshellComponent', () => {
  let component: CommonshellComponent;
  let fixture: ComponentFixture<CommonshellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonshellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonshellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
