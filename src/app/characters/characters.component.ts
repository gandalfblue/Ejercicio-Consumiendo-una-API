import { CharacterInterface } from './../characterInterface';
import { CharacterService } from '../characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass'],
})
export class CharactersComponent implements OnInit {
  ninjas: Array<CharacterInterface>;

  constructor(private character$: CharacterService) {
    this.ninjas = new Array();
  }

  ngOnInit(): void {
    this.character$.getDatails().subscribe((ninja: any) => {
      this.ninjas = ninja;
    });
  }
}
