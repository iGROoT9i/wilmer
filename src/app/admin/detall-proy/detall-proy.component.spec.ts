import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallProyComponent } from './detall-proy.component';

describe('DetallProyComponent', () => {
  let component: DetallProyComponent;
  let fixture: ComponentFixture<DetallProyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallProyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
