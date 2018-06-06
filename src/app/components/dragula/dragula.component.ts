import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-dragula',
  templateUrl: './dragula.component.html',
  styleUrls: ['./dragula.component.css']
})
export class DragulaComponent implements OnInit {

  title = 'Testing ng2-dragula';

  constructor(private dragulaService: DragulaService) {

    dragulaService.setOptions('bag-task1', {
      direction: 'vertical',
      copy: false
    });
  }

  ngOnInit() {
  }

}






