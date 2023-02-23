# ClientDeliveries

This is a simple Angular application that allows users to manage delivery addresses. Users can view, create, and edit addresses. The application has been developed using the Clean Architecture principles and NGRX state management.

## Getting started

To run this application locally, follow these steps:
  1- Clone this repository to your local machine 
  2- Run `npm install` to install all dependencies
  3- Run `ng serve` to start the server
  4- Navigate to http://localhost:4200/ in your web browser

## Features

This application has the following features:

* View a list of delivery addresses
* View a single delivery address
* Create a new delivery address
* Pagination of the delivery addresses list

## Technologies used

* Angular 15.1.0
* NGRX state management
* Angular Material
* Bootstrap 5
* RxJS
* TypeScript

## Folder structure

The application is structured using the Clean Architecture principles. The folder structure is as follows:

    app/
    ├── application             # Contains the application models.
    ├── core                    # Contains the NGRX store, actions, reducers,selectors, and effects.
    ├── services                # Contains the services used by the application.
    └── ui                      # Contains the user interface components

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
