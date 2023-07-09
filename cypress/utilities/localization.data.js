import {en} from '../resources/en.js'
import {de} from '../resources/de.js'



/* const  localData =()=>{
    return currentLanguage === 'en' ? en : de;
}
 */
export function localData () {
    const currentLanguage = Cypress.env().language
    console.log('here lnag is : '+currentLanguage)
    if(currentLanguage === 'en')
    {
      cy.pause()
      return en
    }
    else{
      return  de
    }
    };