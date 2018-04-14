import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFinalizadoComponent } from './dialog-finalizado.component';

describe('DialogFinalizadoComponent', () => {
  let component: DialogFinalizadoComponent;
  let fixture: ComponentFixture<DialogFinalizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFinalizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
