import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    // template: `<h3>This is app-header component.</h3>
    // <h1>This is a text</h1>`,
    // styles: `h3 {
    //     color: green;
    //     background: blue
    //     }
    //     h1 {
    //         background: black;
    //         color: white
    //     }
    //     `,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})


export class HeaderComponent { 

}