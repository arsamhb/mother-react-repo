## Getting Started

This project is a basic config that you can use to accelerate the process of developing a new frontend project using Next ReactJS

## Basic Things You Need to Know

This repository leverages the NextJS, so for routing, layout and pages go and read NextJS docs

This repository leverages the Tailwind for styling, also a global.css for globally customization is available which is imported in src/app/layout

## Setting the Project Up

Add the server address in your ENV file with name this REACT_APP_BASE_URL

If you want to set a local font (which you have been placed it in ./public/fonts/blahblah.woff2) then you should go to src/app/layout and handle a section under comment // FONT CONFIGURATION

## Folder Structure

# app

This folder follows the Next 15 structure for the project each file is a route, also the components that are going to be used on this route will be placed in the /components in that specific directory(route). For more information study the link below
https://nextjs.org/docs/app/getting-started/project-structure

# Public

Inside the public folder you can put all of your static assets.

Suggested Options:
./public
/fonts -> place all of your fonts in this directory
/img -> place all of your statics images and svg files in this directory
favicon -> do not forget to add your favicon to the project by replacing it with vercel's icon

# lib

This folder contains the base configuration for /axios ...

# shared

shared folder contains two sub-directories
1-components: containing components that are really not bound to any specific features like Button, Input and etc
2-utils: containing util functions that are really not bound to any specific features like getJalaliDate and etc

# feature

Feature folder is a tricky one, probably most of the time of a developer will be spend in here. There are some notes which should be considered - creating a new directory under /feature should be with considerations. a simple way to assure us that we are allowed to create a new directory is by asking this question "Am I creating new route in the project?". If your answer is yes then you can create new sub-directory under /feature - each sub-directory under feature encompasses two main folder - api: the place for keeping all the logic related to api calling and fetching data from the backend. each file has a specific role. as described below - adapter.apiToLocal.ts: contains all the adapter functions that convert the coming data from backend to schemas for the frontend - adapter.LocalTOapi.ts: contains all the adapter functions that convert the schemas of the frontend to api interfaces to send to backend - dummy.api.ts: contains all the api call logic by the tanstack-react-query for each api file - route.api.ts: this file contains routes related to that specific entity for all the APIs for that one - types: the place for keeping all the types and schemas related to the feature, schemas of the components(props), schemas of entities, payload and responses interface. - payload.type.ts: contains the interfaces of payloads for the requests of this specific entity - response.type.ts: contains the interfaces of responses for the requests of this specific entity - schema.type.ts: contains the interfaces of the entity and props of the components of that entity

## UI and Theme

In this project we are leveraging tailwind + DaisyUI as the UI kit based on the recommendations on the official docs please follow this guideline - daisyUI is fully themeable and colorable, So instead of using constant color utility classes like:
bg-green-500
It's suggested to use semantic color utility classes like:
bg-primary

In the list below you can find a list of all standard names for color names in the project, this list is written based on the DaisyUI documentation.

    primary             primary-content
    secondary           secondary-content
    accent              accent-content
    neutral             neutral-content
    info                info-content
    success             success-content
    warning             warning-content
    error               error-content
* consider each color as an option in the theme and -content is the color foreground to use on that color.

    base-100            base-200        base-300        base-content
* base-100 is a background color for the page, -200 and -300 are darker version of it. and base-content is the color foreground to use on that base-100.

CAUTION: before adding or defining any new component check the DaisyUI documentation.

For theming you can go to ./tailwind.config.ts, this file includes a basic configuration for DaisyUI colors, and also a custom config for the tailwind, this basic configuration contains spacing (padding, margin and gap), border radius, border width and font size. The font size is an empty configuration so you can customize it based on the UI.

ATTENTION: Each component in ./component/UI/... has its own stylings in the global.css file, and those components accept the variants as the prop to render what they should render. During the development keep this structure consistent for shared components.




