import { Component, Input, OnInit } from '@angular/core';
import { UnitIdentifier } from 'src/app/model/Enums/UnitIdentifier';
import Unit from 'src/app/model/Unit';

@Component({
  selector: 'app-unitview',
  templateUrl: './unitview.component.html',
  styleUrls: ['./unitview.component.scss']
})
export class UnitviewComponent implements OnInit {
  @Input() unit!: Unit;

  constructor() { }

  ngOnInit(): void {
  }

  GetIcon(){
    switch(this.unit.Identifier){
      case UnitIdentifier.Complex:
        return "users";
        case UnitIdentifier.Leader:
          return "crown";
          default:
            return "user";
    }
  }
}
