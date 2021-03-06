import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInputNameComponent } from './dialog-input-name.component';

describe('DialogInputNameComponent', () => {
  let component: DialogInputNameComponent;
  let fixture: ComponentFixture<DialogInputNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogInputNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInputNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
