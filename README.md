# Zenklub Challenge
Rest Service with Node.js, TypeScript, Nestjs and Mongoose.

https://bnobrega-zenklub-challenge.herokuapp.com/v1/professionals/docs

## Endpoints
| Method | URL                                                           | Description                                 |
| ------ | --------------------------------------------------------------| ------------------------------------------- |
| POST   | v1/professionals/:professionalId/availabilities               | Creates new professional availability       |
| PUT    | v1/professionals/:professionalId/availabilities/:id           | Change professional availability            |
| GET    | v1/professionals/:professionalId/availabilities               | Search professional availability            |
| DELETE | v1/professionals/:professionalId/availabilities/:id           | Remove professional availability            |
| POST   | v1/professionals/:professionalId/booking                      | Creates booking                             |
| GET    | v1/professionals/:professionalId/slots?start=&finish=         | Search professional slots                   |

## Getting Started

The following instruction indicate the steps and dependencies required to install and run the project.

### Prerequisites

- **NodeJs**
- **MongoDB**

### Installing

- **yarn install** or **npm install**

## Running

### Development environment

```bash
export NODE_ENV=dev
npm run build && npm start
```

***Swagger:*** `http://localhost:9000/v1/professionals/docs/static/index.html`

#### Requests Examples
##### Create Availability

**Params:**
ProfessioanId: *5deaea44e1ffca9d98281d26*
&nbsp;
**Body:**

```json
{
  "month": 11,
  "weekdays": [
    {
      "weekDay": 0,
      "availabilities": [
        {
          "start": "08:00",
          "finish": "11:00"
        },
        {
          "start": "17:00",
          "finish": "20:00"
        }
      ]
    },
    {
      "weekDay": 1,
      "availabilities": [
        {
          "start": "08:00",
          "finish": "12:00"
        },
        {
          "start": "17:00",
          "finish": "18:00"
        }
      ]
    },
    {
      "weekDay": 3,
      "availabilities": [
        {
          "start": "08:00",
          "finish": "11:00"
        },
        {
          "start": "17:00",
          "finish": "20:00"
        }
      ]
    },
    {
      "weekDay": 4,
      "availabilities": [
        {
          "start": "08:00",
          "finish": "20:00"
        }
      ]
    },
    {
      "weekDay": 5,
      "availabilities": [
        {
          "start": "08:00",
          "finish": "18:00"
        }
      ]
    },
    {
      "weekDay": 6,
      "availabilities": [
        {
          "start": "09:00",
          "finish": "12:00"
        },
        {
          "start": "17:00",
          "finish": "20:00"
        }
      ]
    }
  ]
}
```

##### Create Booking

**Params:**
ProfessioanId: *5deaea44e1ffca9d98281d26*

&nbsp;
**Body:**

```json
{
  "start": "2019-12-14T10:00:00Z",
  "finish": "2019-12-14T11:00:00Z"
}
```

##### Get Slots

**Params:**
ProfessioanId: *5deaea44e1ffca9d98281d26*

&nbsp;
**Query:**
start: *2019-12-14*
finish: *2019-12-14*

## Built With

- **NodeJs**
- **Typescript**
- **Nestjs**