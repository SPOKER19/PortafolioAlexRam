import React from 'react';


export const RedesSociales = () => {

    let instagram = <ion-icon name="logo-instagram"></ion-icon>;
    let twitter = <ion-icon name="logo-twitter"></ion-icon>;
    let youtube = <ion-icon name="logo-youtube"></ion-icon>;
    let google = <ion-icon name="logo-google"></ion-icon>;

    const RedesSociales = [
        { id: 1, nombre: "instagram", logo: instagram, href: "https://www.instagram.com/", style: 'rounded-tr-md' },
        { id: 2, nombre: "twitter", logo: twitter, href: "https://twitter.com/" },
        { id: 3, nombre: "youtube", logo: youtube, href: "https://www.youtube.com/"  },
        { id: 4, nombre: "gmail", logo: google, href: "mailto:foo@gmail.com", style: 'rounded-br-md'  }        
    ]

    const fxmostrarLinksMovil = () => {
        return  RedesSociales.map(RRSS => (
            <li key={RRSS.id}                
                className={`${RRSS.style} flex items-center justify-between w-40 px-4 bg-gray-500 h-14 ml-[-120px] hover:ml-[-10px]`}                 
            >
                <a  href={RRSS.href}
                    className='flex items-center justify-between w-full '
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {RRSS.nombre}
                    <span className='pt-2 text-xl rounded-full'>
                        {RRSS.logo}
                    </span>
                </a>                    
            </li>           
        ))
         
    }

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
            <ul>
                {fxmostrarLinksMovil()}                
            </ul>
            
        </div>
    )
}
