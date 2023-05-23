export const environmentsComponenets=(elements)=>{


    console.log(import.meta.env);


    const html=`
    Dev: ${import.meta.env.DEV} <br/>
    Prod: ${import.meta.env.PROD} <br/>
    KEY: ${import.meta.env.VITE_API_KEY} <br/>
    Url: ${import.meta.env.VITE_BASE_RUL} <br/>
    `;
    elements.innerHTML=html
}