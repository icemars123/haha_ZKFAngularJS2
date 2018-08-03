import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(pipeData, pipeModifier){
        return pipeData.filter((earchItem)=>{
            return earchItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) || 
                   earchItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase());
        })
    }
}