import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import LogoDino from "./03_Imagenes/Logo/LOGO_DINO.png"
  



export const App = () => {
  return (
          <Navbar
            fluid={true}
            rounded={true}
            className="bg-black"
          >
            <Navbar.Brand href="https://flowbite.com/">
              <img
                src={LogoDino}
                className="h-6 mr-3 sm:h-9"
                alt="Alexander Ramirez"
              />
              <span className="self-center text-xl font-semibold text-gray-300 whitespace-nowrap">
                Alexander Ramirez // Developers.
              </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={<Avatar alt="User settings" img={LogoDino} rounded={true}/>}
              >
                <Dropdown.Header>
                  <span className="block text-sm">
                    Alexander Ramirez
                  </span>
                  <span className="block text-sm font-medium truncate">
                    ramireza2012@gmail.com
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>
                  React Js
                </Dropdown.Item>
                <Dropdown.Item>
                  TailwindCss
                </Dropdown.Item>
                <Dropdown.Item>
                  Solidity
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  Moralis
                </Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>              
              <Link   to={"./"}
                      className="flex flex-row items-center justify-center text-gray-300"
              >
                  <span className='pt-2 mr-3 text-2xl font-bold text-gray-300'><ion-icon name="arrow-back-circle-outline"></ion-icon></span>
                  <span>Home</span> 
              </Link>
            </Navbar.Collapse>
          </Navbar>
  )
}