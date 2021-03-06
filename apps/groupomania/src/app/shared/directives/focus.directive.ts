import { AfterViewInit, Directive, ElementRef } from "@angular/core";

@Directive({
    selector: "[appFocus]",
})
export class FocusDirective implements AfterViewInit {
    constructor(private host: ElementRef) {}

    ngAfterViewInit(): void {
        this.host.nativeElement.focus();
    }
}
