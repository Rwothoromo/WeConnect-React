Components
----------

**src/App.js**

### 1. App

Application entry point.
Places all content within the `Layout`

```html
<App />
```   




-----
**src/components/Index.js**

### 1. Index

Main page content

```html
<Index />
```   




-----
**src/components/auth/LoginUser.js**

### 1. LoginUser

Form for user login

```html
<LoginUser />
```   




-----
**src/components/auth/LogoutUser.js**

### 1. LogoutUser

Logout user

```html
<LogoutUser />
```   




-----
**src/components/auth/ProfileUser.js**

### 1. ProfileUser

User profile page with password reset button

```html
<ProfileUser />
```   




-----
**src/components/auth/RegisterUser.js**

### 1. RegisterUser

Form for user registration

```html
<RegisterUser />
```   




-----
**src/components/businesses/BusinessButtons.js**

### 1. BusinessButtons

Generate `View` and `Review` buttons for non-business owners

@param {object} props Component props
@param {integer} props.business_id Business id

```html
<BusinessButtons business_id={this.props.id} />
```   




-----
**src/components/businesses/BusinessCards.js**

### 1. BusinessCards

Generate a list of business cards

@param {object} props Component props
@param {object} props.user Contains user data
@param {object} props.businesses_list Contains list of businesses

```html
<BusinessCards user={this.props.user} businesses_list={this.props.businesses_list} />
```   




-----
**src/components/businesses/BusinessModals.js**

### 1. BusinessModals

Generate `View`, `Review`, `Edit` and `Delete` modals for businesses

@param {array} props.businesses_list List of businesses
@param {function} props.showUpdatedBusinesses Form callback function

```html
<BusinessModals businesses_list={this.props.businesses_list} showUpdatedBusinesses={this.props.showUpdatedBusinesses}/>
```   




-----
**src/components/businesses/BusinessOwnerButtons.js**

### 1. BusinessOwnerButtons

Generate `View`, `Edit` and `Delete` buttons for business owners

@param {object} props Component props
@param {integer} props.business_id Business id

```html
<BusinessOwnerButtons business_id={this.props.id} />
```   




-----
**src/components/businesses/BusinessSearch.js**

### 1. BusinessSearch

Form for business search

@param {object} props Component props
@param {function} props.searchBusinesses Form submit callback function

```html
<BusinessSearch searchBusinesses={this.searchBusinesses} />
```   




-----
**src/components/businesses/BusinessesList.js**

### 1. BusinessesList

List all businesses in a searchable, paginated display

```html
<BusinessesList />
```   




-----
**src/components/businesses/DeleteBusiness.js**

### 1. DeleteBusiness

Form for deleting a business

@param {object} props Component props
@param {object} props.business Business object
@param {function} props.showUpdatedBusinesses Form callback function

```html
<DeleteBusiness business={business} showUpdatedBusinesses={this.props.showUpdatedBusinesses} />
```   




-----
**src/components/businesses/RegisterBusiness.js**

### 1. RegisterBusiness

Form for registering a business

@param {object} props Component props
@param {function} props.showUpdatedBusinesses Form callback function

```html
<RegisterBusiness showUpdatedBusinesses={this.showUpdatedBusinesses}/>
```   




-----
**src/components/businesses/ReviewBusiness.js**

### 1. ReviewBusiness

Form for reviewing a business

@param {object} props Component props
@param {object} props.business Business object
@param {function} props.showUpdatedBusinesses Form callback function

```html
<ReviewBusiness business={business} showUpdatedBusinesses={this.props.showUpdatedBusinesses} />
```   




-----
**src/components/businesses/ReviewCards.js**

### 1. ReviewCards

Generate a list of review cards for a business

@param {object} props Component props
@param {object} props.reviews_list Contains list of businesses

```html
<ReviewCards reviews_list={this.props.reviews_list} />
```   




-----
**src/components/businesses/ShowBusiness.js**

### 1. ShowBusiness

Display a business' information and reviews

@param {object} props Component props
@param {object} props.business Business object

```html
<ShowBusiness business={business} />
```   




-----
**src/components/businesses/UpdateBusiness.js**

### 1. UpdateBusiness

Form for updating a business

@param {object} props Component props
@param {object} props.business Business object
@param {function} props.showUpdatedBusinesses Form callback function

```html
<UpdateBusiness business={business} showUpdatedBusinesses={this.props.showUpdatedBusinesses} />
```   




-----
**src/components/shared/Footer.js**

### 1. Footer

Footer

```html
<Footer />
```   




-----
**src/components/shared/Header.js**

### 1. Header

Header

```html
<Header />
```   




-----
**src/components/shared/Layout.js**

### 1. Layout

The `Layout` for the entire application.
All content is placed between the `Header` and `Footer`

```html
<Layout />
```   




-----
**src/components/shared/Paginator.js**

### 1. Paginator

Generate `Prev` and `Next` buttons for a paginated list
@param {object} props Component props
@param {integer} props.prev_page Id for the previous page
@param {integer} props.next_page Id for the next page
@param {function} props.handlePageChange Paginator callback function

```html
<Paginator prev_page={1} next_page={2} handlePageChange={this.handlePageChange} />
```   




-----
**src/components/shared/UserTabs.js**

### 1. UserTabs

Navigation menu options for a logged in user

```html
<UserTabs />
```   




-----
**src/components/shared/VisitorTabs.js**

### 1. VisitorTabs

Navigation menu options for a visitor to the site

```html
<VisitorTabs />
```   




-----

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
