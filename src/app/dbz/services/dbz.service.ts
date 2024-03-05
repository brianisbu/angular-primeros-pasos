import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    
    public characters:Character[] = [
        {
            id:uuid(),
        name:'krillin',
        power:1000,
    },
    {
        id:uuid(),
        name: 'goku',
        power:10000
    },
    {
        id:uuid(),
        name:'vegeta',
        power:9500
    },
    ];

    addCharacter(character:Character):void{

        const newCharacte: Character = {id:uuid(),...character};

        this.characters.push(newCharacte)
    }

    /*onDeleteCharacter(i:number){
        this.characters.splice(i,1)
    }*/

    deleteCharacterById(id:string){
        this.characters = this.characters.filter(character => character.id !== id);
    }
    
}