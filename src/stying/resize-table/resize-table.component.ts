import { Component, AfterViewInit} from '@angular/core';


function createResizableColumn(col, resizer: HTMLDivElement) {

  let x = 0;
  let w = 0;

  const mouseDownHandler = function (e) {
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

@Component({
  selector: 'kt-resize-table',
  templateUrl: './resize-table.component.html',
  styleUrls: ['./resize-table.component.scss']
})
export class ResizeTableComponent implements  AfterViewInit {

/*  constructor(private el: ElementRef) { }

  @HostListener('mouseover')
  onMouseOver() {
    this.el.nativeElement.querySelector("#move").animate({
      top: Math.random() * 300
    }, 100);
    this.el.nativeElement.querySelector("#move").animate({
      left: Math.random() * 300
    }, 100);

  }*/

  ngAfterViewInit() {
    this.createResizableTable(document.getElementById('resizeMe'));
  }


  createResizableTable(table: HTMLElement) {

      const cols = table.querySelectorAll('th');
      [].forEach.call(cols, function (col) {
// Add a resizer element to the column
        const resizer = document.createElement('div');
        resizer.classList.add('resizer');

// Set the height
        resizer.style.height = `${table.offsetHeight}px`;

        col.appendChild(resizer);

        createResizableColumn(col, resizer);
      });
    };





}
