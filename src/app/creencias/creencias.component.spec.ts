import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreenciasComponent } from './creencias.component';

describe('CreenciasComponent', () => {
  let component: CreenciasComponent;
  let fixture: ComponentFixture<CreenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
