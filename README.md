# Group-3-Project-1
Covalence Online Store

# Group Project 1 - Covalence Online Store

### Due: Monday, October 30, 2017

### Info
* You can find a visual mockup of this site [here](https://projects.invisionapp.com/share/AKB778769#/227819973_Covalence-Store-01)
* This site will have the following pages:
    * A welcome page
    * A product list page - Shows tiles of product images, along with title, short description, and price
    * Contact us page - Should have a form where people can input their name, email, and a message. You should use sendgrid to email yourselves in response to this form being filled out.
    * A single product page - A page that shows the image, name, description, and price for the single product you are viewing and also an add to cart button
    * A checkout page - A page that shows the items you are purchasing and has a payment form
        * DONE (ED) Should have fields for email, card number, CVC, expiration, AND billing zip code
        * After checkout, you should send an email to the customer thanking them for their purchase, complete with the list of items they purchased and the amounts
    * DONE: A navbar at the top of the site
        * Logo links to the home page
        * Apparel link
        * Misc link
        * Contact Us link
        * Cart/Checkout link (popover/collapsible is extra)
    
### Requirements
* DONE (BB): Must use a MySQL database hosted in Heroku ClearDB, and use stored procedures
    * DONE (BB): Should have tables for Categories, Products, Purchases, and PurchasesProducts
    * DONE (BB): Categories
        * id int AI
        * name varchar(50)
    * DONE (BB): Products
        * id int AI
        * categoryid int FK for Categories id, cascade update, set null on delete
        * title varchar(50)
        * description varchar(255)
        * price decimal(5,2)
        * imageurl varchar(500)
    * DONE (BB): Purchases
        * id int AI
        * price decimal(5,2)
        * stripetransactionid varchar(100)
    * DONE (BB): PurchasesProducts
        * productid int FK for Product id, cascade update, cascade on delete
        * purchaseid int FK for Purchase id, cascade update, cascade on delete
* DONE Must use Express and NodeJS, hosted in Heroku
* DONE (ED) Must use prerender.io
* DONE (ED) Must use Stripe for card processing
* DONE (BB): Must use Sendgrid or Mailgun for email sending
* Must be responsive (look good on mobile and desktop)
    * Bootstrap's Grid System will be very helpful
    * You can find standalone grid systems if you don't want to use Bootstrap

### Images
* You will be given product images
    * DONE (BB): You can save these into a folder named images in your client folder
    * DONE (BB): For a file called waterbottle.png in the images folder, the product in the database should have an imageurl value of '/images/waterbottle.png'
* You can use mustache in the src of an image tag to bind to the imageurl of the product
    * You may want to use a background-image instead

### Other Hints
* Think about $routeProvider and front-end route parameters to see whether you need separate views/controllers for apparel and misc or not
