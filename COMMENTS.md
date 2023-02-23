/// **** CLient Deliveries **** ///
    1- Clean Architecture
    2- Routes
    3- Services
    4- Summary

1- Clean Architecture

    - The "application" folder holds the business logic in my case holding the models folder.
    - The "core" folder contains the logic related to the state management of the application, including actions, reducers, selectors, and effects. 
    - The "services" folder holds any services that are used across the application.
    - The "ui" folder holds all the components.
    By using this structure, I can easily modify and maintain the codebase without worrying about affecting other parts of the application.

2- Routes

    - The empty path '/' is associated with the AddressListComponent, which displays a table of all addresses.
    - The path '/create' is associated with the AddressFormComponent, which provides a form to create a new address.
    - The path ':id' is associated with the AddressDetailsComponent, which displays the details of a specific address, based on the provided id parameter in the URL. This route is protected by the IdGuardService, which ensures that the parameter passed in the URL is a number.
    - The '**' wildcard path is associated with the NotFoundComponent, which is displayed when none of the above routes match the URL.

3- Services : 

    1- AddressApiService is the service responsible for interacting with the backend API to perform CRUD operations on Address objects. It uses the Angular HttpClient to send HTTP requests and returns an Observable that can be subscribed to by the calling component. The service also has an addresses property that is a BehaviorSubject that emits the current list of addresses retrieved from the API.

    2- PaginationService is the service responsible for handling pagination of the addresses displayed in the UI. 
    It has a pageSize property that determines how many addresses are displayed per page.
    The service uses the selectAddresses selector from the address.selectors file to retrieve the addresses from the store. 
    It then paginates the addresses based on the activePage property, which is a BehaviorSubject that emits the current active page. 
    The service also has pagedAddresses, activePage, and totalPages properties that are BehaviorSubjects that emit the current list of paginated addresses, the current active page, and the total number of pages, respectively. 
    The setActivePage method allows the calling component to set the current active page.

4- Summary : 

    This solution implements the Clean Architecture principles to build a CRUD address's application. The application is structured into different layers, including the app layer, core layer, services layer, and ui layer.

    The app layer contains the models used inside the application. The core layer contains actions, reducers, selectors, and effects that handle state management and business logic. The services layer provides APIs and services for the application, including the AddressApiService and PaginationService. The ui layer contains all the components used in the application, including the AddressDetailsComponent, AddressFormComponent, AddressListComponent, and NotFoundComponent.

    The AddressApiService provides methods to retrieve and post addresses from an API, while the PaginationService provides pagination logic and state management for the address list.

    The application uses Angular Material to provide a consistent and responsive UI, and uses NgRx to manage state and provide a scalable solution for the application's needs.

    Overall, the application implements a well-structured architecture that promotes modularity, testability, and scalability.