import { Component } from "@angular/core";

// declare the Component
@Component({
    selector: 'app',
    templateUrl: './partials/app.html'
})

export class AppComponent {
    name: string;
    artists: any;

    onClick(e) {
        // console.log(e.target.innerHTML);
        this.name = e.target.innerHTML;
    }

    addArtist(value) {
        if (value!=='') {
            this.artists.push({
                name: value,
                school: 'Hard Knocks'
            });
        }
    }


    constructor(){
        this.name = 'Kaifeng Zhao';
        this.artists = [
            {
                name: 'Besag Ualkg',
                school: 'Melbourne Uni'
            },{
                name: 'Cat Totty',
                school: 'Monash Uni'
            },{
                name: 'Unjk Post',
                school: 'Rmit'
            }
            
        ]
    }
    // name = 'Gavin Zhao' ;

}