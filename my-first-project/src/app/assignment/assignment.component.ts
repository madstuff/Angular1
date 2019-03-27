import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  username = '';
  @Input() exampleInput = 'Variable from child component';
  @Output() valueChange = new EventEmitter();
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    console.log('hey I am  clicked in Assignment component');
  }

  increment() {
    this.counter += 1;
    this.valueChange.emit(this.counter);
  }

  onLodash() {
    const array = [1];
    const other = _.concat(array, 2, [3]);
    console.log(other);

  }

}
