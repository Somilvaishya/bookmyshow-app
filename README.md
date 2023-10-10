# Hi, I'm Somil vaishya! 👋

I am Full stack Intern at Almabetter and this is my second project, on Book My Show

# Book MyShow

This online booking platform simplifies the process of reserving movie tickets, prioritizing user-friendliness and convenience. It offers a seamless experience, enabling you to effortlessly explore, select, and purchase tickets for films. Using BookMyShow, you can secure your desired movie, pick the ideal screening time, and confirm your seat reservations. Additionally, you'll have access to essential movie information, including show schedules and seat availability.

## Installation

If you want to work on this project , clone this repo

```bash
git clone "https://github.com/Somilvaishya/bookmyshow-alma"

```

Open this project on your local IDE and in the terminal do this commands one by one

- For Frontend

```
cd frontend
npm install
npm start

```

- For backend

```
cd backend
npm install
npm run server
```

In the backend you should connect with database server.
This will start you frontend part on port - http://localhost:3000 and backend part running on port- http://localhost:8080

## API Reference

Base URL

`https://bookmyshow-alma.onrender.com/api/showbooking`

Booking

- get booking

```http
  GET /api/showbooking
```

- post booking
  Returns a list of all bookings stored in the database in JSON format.

```http
  POST /api/showbooking
```

| Parameter  | Type     | Description                      |
| :--------- | :------- | :------------------------------- |
| `movie`    | `string` | **Required**. selected movie     |
| `timeSlot` | `string` | **Required**. selected time slot |
| `seats`    | `string` | **Required**. selected seats     |

Returns the newly created booking in JSON format

## Deployment

Here is the links of deployed project

- For Frontend

`https://bookmyshow-alma.netlify.app`

- For Backend

`https://bookmyshow-alma.onrender.com/api/showbooking`

By clicking on above links , you can see the project

## How to Use

1. click on below link

```https
[bookmyshowApp]  https://bookmyshow-alma.netlify.app

```

2. select the movie you would like to watch.
3. select timeslot .
4. select any seat type and number of seats would you like to booked.
5. click on `Book Now` button. If you want to change any selected field, then do changes before booking it.

After click on Book Now button you got succesfull booking message and ypur last booking details display on the screen under last booking details heading.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Note : your mongodb clustur connect key
`API_KEY`

# For Backend

- MongoDb live connection string

`MONGODBURI: mongodb+srv://<user_name>:<password>@mongodb_connection_string/database_name`

- MongoDb local connection string (if you set application on localhost)

`MONGODBURI = mongodb://localhost:27017/<database_name> `

`COLLECTION_NAME = <collection_name>`

- if application is running on localhost set node_env development
  or if it is on live set production
  `NODE_ENV =  development (development || production)`

`APP_PORT = 8080 `

- api routes path

`GET_REQUEST = /api/showbooking`
`POST_REQUEST = /api/showbooking`

# For Frontend

`REACT_APP_API_LOCAL_PATH = http://localhost:3000`

`REACT_APP_API_LIVE_PATH = https://bookmyshow-alma.onrender.com/api/showbooking`

## Tech Stack

**frontend:** React js

**Server:** Node, Express

**database:** MongoDB
