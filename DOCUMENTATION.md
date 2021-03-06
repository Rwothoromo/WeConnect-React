## Components

**src/components/Index.js**

### 1. Index

Main page content

```html
<Index />
```

---

**src/components/auth/LoginUser.js**

### 1. LoginUser

Form for user login

```html
<LoginUser />
```

---

**src/components/auth/LogoutUser.js**

### 1. LogoutUser

Logout user

```html
<LogoutUser />
```

---

**src/components/auth/ProfileUser.js**

### 1. ProfileUser

User profile page with password reset button

```html
<ProfileUser />
```

---

**src/components/auth/RegisterUser.js**

### 1. RegisterUser

Form for user registration

```html
<RegisterUser />
```

---

**src/components/businesses/BusinessButtons.js**

### 1. BusinessButtons

Generate `View` and `Review` buttons for non-business owners

@param {object} props.business Component props containing Business

```html
<BusinessButtons business="{business}" />
```

---

**src/components/businesses/BusinessCards.js**

### 1. BusinessCards

Generate a list of business cards

@param {object} props.user Contains user data
@param {object} props.businesses_list Contains list of businesses

```html
<BusinessCards user="{user}" businesses_list="{businesses_list}" />
```

---

**src/components/businesses/BusinessModals.js**

### 1. BusinessModals

Generate `View`, `Review`, `Edit` and `Delete` modals for businesses

@param {object} props.businesses Contains business list
@param {function} props.showUpdatedBusinesses Business list update function

```html
<BusinessModals
  businesses="{businesses}"
  showUpdatedBusinesses="{showUpdatedBusinesses}"
/>
```

---

**src/components/businesses/BusinessOwnerButtons.js**

### 1. BusinessOwnerButtons

Generate `View`, `Edit` and `Delete` buttons for business owners

@param {object} props.business Component props containing Business

```html
<BusinessOwnerButtons business="{business}" />
```

---

**src/components/businesses/BusinessSearch.js**

### 1. BusinessSearch

Form for business search

@param {function} props.searchBusinesses Form submit callback function searchBusinesses

```html
<BusinessSearch searchBusinesses="{searchBusinesses}" />
```

---

**src/components/businesses/BusinessesList.js**

### 1. BusinessesList

List all businesses in a searchable, paginated display

```html
<BusinessesList />
```

---

**src/components/businesses/DeleteBusiness.js**

### 1. DeleteBusiness

Form for deleting a business

@param {object} props.business Business object
@param {function} props.showUpdatedBusinesses Form callback function

```html
<DeleteBusiness
  business="{business}"
  showUpdatedBusinesses="{showUpdatedBusinesses}"
/>
```

---

**src/components/businesses/RegisterBusiness.js**

### 1. RegisterBusiness

Form for registering a business

@param {function} props.showUpdatedBusinesses Form callback function showUpdatedBusinesses

```html
<RegisterBusiness showUpdatedBusinesses="{showUpdatedBusinesses}" />
```

---

**src/components/businesses/ReviewBusiness.js**

### 1. ReviewBusiness

Form for reviewing a business

@param {object} props.business Business object
@param {function} props.showUpdatedBusinesses Form callback function

```html
<ReviewBusiness
  business="{business}"
  showUpdatedBusinesses="{showUpdatedBusinesses}"
/>
```

---

**src/components/businesses/ReviewCards.js**

### 1. ReviewCards

Generate a list of review cards for a business

@param {object} props.reviews_list Contains list of business reviews

```html
<ReviewCards reviews_list="{reviews_list}" />
```

---

**src/components/businesses/ShowBusiness.js**

### 1. ShowBusiness

Display a business' information and reviews

@param {object} props.business Component props containing Business

```html
<ShowBusiness business="{business}" />
```

---

**src/components/businesses/UpdateBusiness.js**

### 1. UpdateBusiness

Form for updating a business

@param {object} props.business Business object
@param {function} props.showUpdatedBusinesses Form callback function

```html
<UpdateBusiness
  business="{business}"
  showUpdatedBusinesses="{showUpdatedBusinesses}"
/>
```

---

**src/components/shared/Footer.js**

### 1. Footer

Footer

```html
<footer />
```

---

**src/components/shared/Header.js**

### 1. Header

Header

```html
<header />
```

---

**src/components/shared/Layout.js**

### 1. Layout

The `Layout` for the entire application.
All content is placed between the `Header` and `Footer`

```html
<Layout />
```

---

**src/components/shared/Paginator.js**

### 1. Paginator

Generate `Prev` and `Next` buttons for a paginated list
@param {object} props Component props
@param {integer} props.prev_page Id for the previous page
@param {integer} props.next_page Id for the next page
@param {function} props.handlePageChange Paginator callback function

```html
<Paginator
  prev_page="{1}"
  next_page="{2}"
  handlePageChange="{this.handlePageChange}"
/>
```

---

**src/components/shared/UserTabs.js**

### 1. UserTabs

Navigation menu options for a logged in user

```html
<UserTabs />
```

---

**src/components/shared/VisitorTabs.js**

### 1. VisitorTabs

Navigation menu options for a visitor to the site

```html
<VisitorTabs />
```

---

<sub>This document was generated by the <a href="https://github.com/marborkowski/react-doc-generator" target="_blank">**React DOC Generator v1.2.5**</a>.</sub>
