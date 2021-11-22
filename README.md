## Available Scripts

In the project directory, you can run:

### `npm i`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## How to Use this App:

- first select a doctor you want to schedule an appointment with by clicking on that doctor's name.
- next you will be taken to a calender where your chosen doctor's availability highlighted in green areas.
- clicking anywhere on the green area will prompt you to create a new appointment by giving a title. The default slot is 30 mins.
- you can only book an appointment in time period highlighted by green region.
- once you give a title to the browser prompt the appointment will appear on the calender in blue color.
- You can also delete an event by clicking on it. First you will be prompted for an confirmation.

## Notes :

- Weekly availability for each doctor is provided in terms of week days rather than a specific date.
- I chose to use a calender component to handle appointment scheduling. However, it can be done in a tabular form as well.
- These availability will act as an input constraint to the calender component to prevent a user from creating an event outside of the availability scope.
- sessionStorage is used for the sake of state persistance since there is not backend.
