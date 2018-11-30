import { Component } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  dropOptions = [
    {id: 0, title: 'option 0'},
    {id: 1, title: 'option 1'},
    {id: 2, title: 'option 2'},
    {id: 3, title: 'option 3'}
  ];
  dropValue = 2;

  onClick() {
    this.dropValue++;
    if (this.dropValue > 3) { this.dropValue = 0; }
  }
}



// Dropdown.prototype.findOptionIndex = function (val, opts) {
//   var index = -1;
//   if (opts) {
//       for (var i = 0; i < opts.length; i++) {
//           if ((val == null && opts[i].value == null)
//               || this.objectUtils.equals(val, opts[i].value, this.dataKey)
//               || opts[i].value[this.dataKey] == val) // solution string {
//               index = i;
//               break;
//           }
//       }
//   }
//   console.log('Dropdown.prototype.findOptionIndex\n','val',val,'index', index,'opts\n',opts)
//   return index;
// };
