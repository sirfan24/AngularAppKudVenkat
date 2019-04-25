import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
    selector: 'simple',
    template: `You entered : {{simpleInput}}`
})
export class SimpleComponent implements OnChanges {
    
    @Input() simpleInput: string;

    ngOnChanges(changes: SimpleChanges) {

        for (let propertName in changes) {
            let change = changes[propertName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);

            console.log(propertName + ': currentValue = ' + current + ', previousValue = ' + previous);
        }
    }

} 