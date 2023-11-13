import {Component, AfterViewInit, ElementRef, HostListener} from '@angular/core';




@Component({
  selector: 'kt-resize-table',
  templateUrl: './resize-table.component.html',
  styleUrls: ['./resize-table.component.scss']
})
export class ResizeTableComponent implements  AfterViewInit {
  private mouseMoveHandler: void;
  private mouseUpHandler: void;

  constructor(private el: ElementRef) { }

  @HostListener('mouseover')
  onMouseOver() {
    document.addEventListener('mousemove', this.createResizableTable.call(this.mouseMoveHandler));
    document.addEventListener('mouseup', this.createResizableTable.call(this.mouseUpHandler));

  }

  ngAfterViewInit() {
    this.createResizableTable(document.getElementById('resizeMe'));
  }



  createResizableTable(table: HTMLElement) {

    const cols = table.querySelectorAll('th');

    function createResizableColumn(col, resizer: HTMLHRElement) {
      let x = 0;
      let w = 0;

      const mouseDownHandler = function (e: { clientX: number; }) {
        x = e.clientX;

        const styles = window.getComputedStyle(col);
        w = parseInt(styles.width, 10);
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);

        resizer.classList.add('resizing');
      };

      const mouseMoveHandler = function (e) {
        const dx = e.clientX - x;
        col.style.width = `${w + dx}px`;
      };

      const mouseUpHandler = function () {
        resizer.classList.remove('resizing');
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
      };

      resizer.addEventListener('mousedown', mouseDownHandler);
    }

    [].forEach.call(cols, function (col) {
      // Add a resizer element to the column
      const resizer = document.createElement('hr');
      resizer.classList.add('resizer');

      // Set the height
      resizer.style.height = `${table.offsetWidth}px`;

      resizer.style.maxHeight = `7px`;

      col.appendChild(resizer);

      createResizableColumn(col, resizer);
    });
  };
}
