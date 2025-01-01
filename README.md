## Getting Started

This project is a basic config that you can use to accelerate the process of developing a new frontend project using Next ReactJS

## Basic Things You Need to Know

This repository leverages the NextJS, so for routing, layout and pages go and read NextJS docs

This repository leverages the Tailwind for styling, also a global.css for globally customization is available which is imported in src/app/layout 

## Setting the Project Up

If you use remote images in your project go to ./next.config.ts and config the remote pattern for your images

If you want to set a local font (which you have been placed it in ./public/fonts/blabla.woff2) then you should go to src/app/layout and handle a section under comment // FONT CONFIGURATION

## Folder Structure

# Public

Inside the public folder you can put all of your static assets.

Suggested Options:
./public
    /fonts -> place all of your fonts in this directory
    /img -> place all of your statics images and svg files in this directory
    favicon -> do not forget to add your favicon to the project by replacing it with vercel's icon