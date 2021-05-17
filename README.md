# Anagram Interview Tests: Angular #1 Template

### Introduction

- This interview challenge is offered in lieu of a technical interview. 
- The exercise is expected to take no more that 1 hour to complete (...so roughly the same time as an interview) and can be done anytime after issue. If think it will take to significantly longer than 1 hour, then this role is probably not a good fit got you; 
*which is by no means a reflection of a candidate's ability, just the nature of the role itself.* 
- The requirements should be fairly explicit and easy to understand, but if there are any points requiring clarifications you can email: 
<angular_interview@anagramconsulting.com>


*This repo is the template source for the Angular Interview Test.* 
It was generated using the  [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.*


## Requirements

### Objective:
- Create a simple catalogue based ordering application that allows users to order parts from a selected catalogue

### User Journey
Markup :
- The user selects the catalogue from which they wish to order
- From a list of parts included in the selected calendar they select the parts they wish to order. 
  - The list presented to the user comprises the **name**, **description**, **availability** (in_stock) and **price** of each item 
  - The list also includes an input for each item that is used to add /remove the item from the order e.g. a checkbox, and is *disabled* (and unset) if the item is not in_stock
  - Included within the UI is a aslo running 'Total' that sums the price(s) of the added item(s) and is updated when items are added to or removed from the order
- Once the user has selected the required parts, the can submit the order and get a confirmation number that can be presented in the UI

### APIs
There are a total of 4 (JSON) APIs that are to be used in this exercise:
1. GET /api/catalogue - returns  a list of the the catalogues available i.e. https://test-app.ngrmdgtl.com/api/catalogue
2. GET /api/catalogue/<ID>/product - returns a list of products available in the catalogue <ID> e.g. https://test-app.ngrmdgtl.com/api/catalogue/1/product
3. GET /api/catalogue/<ID>/price - returns a price-list for the products available in the catalogue <ID> e.g. https://test-app.ngrmdgtl.com/api/catalogue/1/price
4. POST /api/catalogue/<ID>/order - is the endpoint to create new orders the expected input is as follows: https://test-app.ngrmdgtl.com/api/catalogue/1/order
```javascript
{
    "items" :
        [
            <PRODUCT_ID>,
            ...
        ]
}
```
...and the return message for a successful order should look like:
```javascript
{
    "status" : "SUCCESS",
    "order_id" : <ORDER_ID>
}
````
### Notes for candidates
- This exercise is intended as a means to evaluate candidate's capacity to understand a problem statement and translate into functional code using common angular constructs. Hopefully, the brief is clear and we welcome you to call out any assumptions in the code comments, but if you feel there is insufficient information to complete the exercise, you can email: <angular_interview@anagramconsulting.com>
- There's no right answer to this problem and with any coding, there is significant scope for personal style, so solve the problem the manner that bes suits you
- Don't worry about the aesthetics, the mark-up needs to be valid and usable but we don't care if it's ugly :smile:
- Once you're done, zip the `src` directory of app (+ any other files you may have added / edited...just *not* the node_modules directory!!) and send it to <angular_interview@anagramconsulting.com> from an email address we can reach you at. Don't worry about the content of the mail, though if you can include your full (preferred) name in the body of the email, that would probably make things a little easier for us :smile:    


## Development server
- The app is expected to be run via standard Angular development sever (see below)
- The proxy file (proxy.conf.js) should route local api calls (dispatched to the relative endpoint /api/*) to the remote host
...

*Use `ng serve` to run a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
There is a proxy config included in the template `proxy.conf.js` which should proxy local api calls to the remote endpoint; you can simply route to /api/... in your code*



## Build

You should make sure tha app build, but no other build steps are required - don't worry about deploying the compiled code.

*Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.*


## Running unit tests

Don't worry about comprensive testing, just ensure original tests pass and (if you have time) add 1 or 2 yourself to evidence basic knowledge of testing work flow.

*Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).*

