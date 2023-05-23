import { heroes } from "../data/heroes";

export const callBackComponenets=(elements)=>{
    console.log('callbackComponent');
    const id1='5d86371f233c9f2425f16916'
    const id2='5d86371fd55e2e2a30fe1ccb1'
    findHero(id1, (error, hero1)=>{
        // elements.innerHTML=hero?.name || 'No hay Heroe'
        if(error){
            elements.innerHTML=error
        }

        findHero(id2,(error, hero2)=>{

            elements.innerHTML=`${hero1.name} | ${hero2.name}`
        })
    })

}

/**
 * 
 * @param {String} id 
 * @param {(error?:string|null, hero: Object)=> void} callback 
 */
const findHero = (id, callback)=>{

    const hero=heroes.find(hero => hero.id === id)
    
    if(!hero){
        callback(`Hero with id ${id} not found.`)
        return; 
    }
    callback( null,hero )
}