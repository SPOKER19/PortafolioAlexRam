import React from 'react';
import { Label, TextInput, Textarea, Button } from 'flowbite-react';


export const ZContact = () => {   

    return (
        <div  name="ZContact" 
            className='w-full h-screen text-yellow-200 bg-gradient-to-b from-black via-black to-gray-900'
        >
            <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto text-center pt-28 xs:pt-32'>        
                <div className=''>
                        <p className='inline text-lg font-bold border-b-4 border-gray-500 xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                            Contactame
                        </p>
                        <p className='py-1 text-sm font-bold xs:text-base sm:text-lg md:text-xl'>
                            Pronto me comunicare contigo. Gracias.
                        </p>
                </div>
                <div className="flex items-center justify-center w-full mb-10 max-w-screen-xs" > 

                    <form   action='https://getform.io/f/c9808e4a-2ea8-4dad-b56e-986fd52dafea'
                            className='flex flex-col w-full md:w-3/4'
                            method="POST"
                    >
                        <div className='mb-3 bg-gray-400 '>
                            <div className="block mt-1 mb-1 ">
                                <Label                                    
                                    htmlFor="name"
                                    value="Your Name"
                                />
                            </div>
                            <TextInput
                                id="name"
                                name="name"
                                type="text"
                                placeholder="your name"
                                required={true}
                                addon="■­­"
                            />
                        </div>
                        <div className='mb-3 bg-gray-400'>
                            <div className="block mt-1 mb-1">
                                <Label                                    
                                    htmlFor="email"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email"
                                name="email"
                                type="email"
                                placeholder="name@flowbite.com"
                                required={true}
                                addon="@"
                            />
                        </div> 
                        <div id="textarea" className='mb-3 bg-gray-400'>
                            <div className="block mt-1 mb-1">
                                <Label
                                htmlFor="comment"
                                value="Your message"
                                />
                            </div>
                            <Textarea
                                id="comment"
                                name="comment"
                                placeholder="Leave a comment..."
                                required={true}
                                rows={4}
                            />
                        </div>
                        <div className='flex items-center justify-center my-5 '>
                            <Button gradientMonochrome="info" size="md" type="submit">
                                Let´s Talk
                            </Button>
                        </div>                       
                    </form>
                </div>
            
            
            </div>
        </div>
    )
}
