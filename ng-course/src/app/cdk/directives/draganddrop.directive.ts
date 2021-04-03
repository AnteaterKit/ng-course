import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, Renderer2, SimpleChanges } from '@angular/core';
import { FoDragSorted } from './fo-drag.model';
@Directive({
  selector: '[drag]'
})
export class DragDirective implements OnChanges {
    // tslint:disable-next-line:variable-name
    private _element: HTMLElement;
    @Input()
    data: any;
    // tslint:disable-next-line:no-output-on-prefix
    @Output()
    onDataDrag = new EventEmitter<any>();
    constructor(private element: ElementRef, private renderer: Renderer2) {
        this._element = this.element.nativeElement;
    }
    ngOnChanges(changes: SimpleChanges): void {
    }
    @HostListener('drop', ['$event'])
    public onDrop(event: any): any {
        console.log('drop');
        console.log(this.data);
        this._element.classList.remove('fo-drag-enter');
        console.log(event.dataTransfer);
        const droppedTransferData = JSON.parse(event.dataTransfer.getData('text'));
        this.onDataDrag.emit(droppedTransferData);
    }
    @HostListener('dragenter', ['$event'])
    public dragEnter(event: any): any {
        console.log('dragenter');
        event.preventDefault();
        this._element.classList.add('fo-drag-enter');
    }
    @HostListener('dragover', ['$event'])
    public dragOver(event: any): any {
        console.log('dragover');
        event.preventDefault();
       // this._element.classList.add('fo-drag-enter');
    }
    @HostListener('dragleave', ['$event'])
    public dragLeave(event: any): any {
        console.log('dragleave');
        this._element.classList.remove('fo-drag-enter');
    }
    @HostListener('dragstart', ['$event'])
    public dragStart(event: any): any {
        console.log('dragstart');
        this._element.classList.add('fo-drag-started');
        // чтобы работал ie придется работать со строками
        event.dataTransfer.setData('text', JSON.stringify(this.data));
        console.log(event.dataTransfer);
    }
    @HostListener('dragend', ['$event'])
    public dragEnd(event: any): any {
        this._element.classList.remove('fo-drag-started');
    }
}
