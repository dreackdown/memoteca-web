import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePensamentoComponent } from './create-pensamento.component';

describe('CreatePensamentoComponent', () => {
  let component: CreatePensamentoComponent;
  let fixture: ComponentFixture<CreatePensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
