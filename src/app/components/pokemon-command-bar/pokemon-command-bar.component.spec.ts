import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCommandBarComponent } from './pokemon-command-bar.component';

describe('PokemonCommandBarComponent', () => {
  let component: PokemonCommandBarComponent;
  let fixture: ComponentFixture<PokemonCommandBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCommandBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCommandBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
