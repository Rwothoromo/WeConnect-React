Components
----------

**src/App.js**

### 1. Routes

All routes used in the application

```html
<Routes />
```

@returns {component} Router   




### 2. App

Application entry point.
Places all content within the `Layout`

```html
<App />
```

 @returns {component} App   




-----
**src/components/Index.js**

### 1. Index

Main page content

```html
<Index />
```

@returns {component} Index   




-----
**src/components/auth/Login.js**

### 1. Login

Form for user login

```html
<Login />
```

@returns {component} Login   




-----
**src/components/auth/Logout.js**

### 1. Logout

Logout user

```html
<Logout />
```

@returns {component} Logout   




-----
**src/components/auth/Profile.js**

### 1. Profile

User profile page with password reset button

```html
<Profile />
```

@returns {component} Profile   




-----
**src/components/auth/Register.js**

### 1. Register

Form for user registration

```html
<Register />
```

@returns {component} Register   




-----
**src/components/businesses/BusinessButtons.js**

### 1. BusinessButtons

Generate `View` and `Review` buttons for non-business owners

@param {object} props Component props containing Business

```html
<BusinessButtons business={business} />
```

@returns {component} BusinessButtons   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
business|object|yes||
-----
**src/components/businesses/BusinessCards.js**

### 1. BusinessCards

Generate a list of business cards

@param {object} props Contains user data and list of businesses

```html
<BusinessCards user={user} businesses_list={businesses_list} handleUpdateModal={handleUpdateModal} />
```

@returns {component} BusinessCards   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
user|object|yes||
businesses_list|array|yes||
handleUpdateModal|func|no||
-----
**src/components/businesses/BusinessModals.js**

### 1. BusinessModals

Generate `View`, `Review`, `Edit` and `Delete` modals for businesses

@param {object} props Contains business list

```html
<BusinessModals isUpdateModalOpen={isUpdateModalOpen} businesses={businesses} />
```

@returns {component} BusinessModals   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
isUpdateModalOpen|bool|yes||
businesses|array|no||
-----
**src/components/businesses/BusinessOwnerButtons.js**

### 1. BusinessOwnerButtons

Generate `View`, `Edit` and `Delete` buttons for business owners

@param {object} props Component props containing Business

```html
<BusinessOwnerButtons business={business} handleUpdateModal={props.handleUpdateModal} />
```

@returns {component} BusinessOwnerButtons   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
business|object|no||
handleUpdateModal|func|no||
-----
**src/components/businesses/BusinessSearch.js**

### 1. BusinessSearch

Form for business search

@param {object} props Component props containing callback function searchBusinesses

```html
<BusinessSearch searchBusinesses={searchBusinesses} />
```

@returns {component} BusinessSearch   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
searchBusinesses|func|no||
-----
**src/components/businesses/BusinessesList.js**

### 1. BusinessesList

List all businesses in a searchable, paginated display

```html
<BusinessesList />
```

@returns {component} BusinessesList   




-----
**src/components/businesses/DeleteBusiness.js**

### 1. DeleteBusiness

Form for deleting a business

@param {object} props Business object

```html
<DeleteBusiness business={business} />
```

@returns {component} DeleteBusiness   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
business|object|yes||
-----
**src/components/businesses/RegisterBusiness.js**

### 1. RegisterBusiness

Form for registering a business

```html
<RegisterBusiness />
```

@returns {component} RegisterBusiness   




-----
**src/components/businesses/ReviewBusiness.js**

### 1. ReviewBusiness

Form for reviewing a business

@param {object} props Business object

```html
<ReviewBusiness business={business} />
```

@returns {component} ReviewBusiness   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
business|object|yes||
-----
**src/components/businesses/ReviewCards.js**

### 1. ReviewCards

Generate a list of review cards for a business

@param {object} props Contains list of business reviews

```html
<ReviewCards reviews_list={reviews_list} />
```

@returns {component} ReviewCards   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
reviews_list|array|no||
-----
**src/components/businesses/ShowBusiness.js**

### 1. ShowBusiness

Display a business' information and reviews

@param {object} props  Component props containing Business

```html
<ShowBusiness business={business} />
```

@returns {component} ShowBusiness   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
business|object|yes||
-----
**src/components/businesses/UpdateBusiness.js**

### 1. UpdateBusiness

Form for updating a business

@param {object} props Business object

```html
<UpdateBusiness business={business} isUpdateModalOpen={isUpdateModalOpen} />
```

@returns {component} UpdateBusiness   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
business|object|yes||
isUpdateModalOpen|bool|yes||
-----
**src/components/shared/Footer.js**

### 1. Footer

Footer

```html
<Footer />
```

@returns {component} Footer   




-----
**src/components/shared/Header.js**

### 1. Header

Header

```html
<Header />
```

@returns {component} Header   




-----
**src/components/shared/Layout.js**

### 1. Layout

The `Layout` for the entire application.
All content is placed between the `Header` and `Footer`

@param {object} props

```html
<Layout />
```

@returns {component} Layout   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
children|array|no||
-----
**src/components/shared/Paginator.js**

### 1. Paginator

Generate `Prev` and `Next` buttons for a paginated list

@param {object} props Component props

```html
<Paginator prev_page={1} next_page={2} handlePageChange={handlePageChange} />
```

@returns {component} Paginator   




Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
prev_page|number|no||
next_page|number|no||
handlePageChange|func|no||
-----
**src/components/shared/UserTabs.js**

### 1. UserTabs

Navigation menu options for a logged in user

```html
<UserTabs />
```

@returns {component} UserTabs   




-----
**src/components/shared/VisitorTabs.js**

### 1. VisitorTabs

Navigation menu options for a visitor to the site

```html
<VisitorTabs />
```

@returns {component} VisitorTabs   




-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
