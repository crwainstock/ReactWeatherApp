# Fetch

In this repository, you will use use fetch to get data asynchronously from an API.

## Objectives

- Use Fetch to interact with an API.
- Use React state to handle asynchronous data.

## Setup

Run `npm install` to install packages.
Run `npm start` to run the development server.

## Basic Requirements

### 1. Create a form.

- [ ] This form should have an input for "location" and a button to "submit".
  - Clicking on "submit" should call the function "handleSubmit" on your component.
  - Function "handleSubmit" will call "getWeather" and take care of other tasks relating to state and the form.
  - Clicking on "submit" should also update the state "loading" to true.

### 2. Call the Open Weather Map API.

- [ ] Call the Open Weather API from the "getWeather" function.
  - You will need to create an account at [Open Weather Map API](https://openweathermap.org/). You will need your API key to make requests.
  - Use "fetch" within the "getWeather" function and call the Open Weather API to get the weather based on location.
  - Store weather data in state.

### 3. Show the end user useful information (make this visually pleasing!)

- [ ] Create a visual for when data is loading.
- [ ] Show weather data once it has loaded.
- [ ] Show an error if the data did not load.

### 4. Optional: Add an additional button to show a 5-day weather forecast instead.

- [ ] To do this, you'll need to create a second button and make a slightly different API call.
  - You can use the same function; just slightly alter the URL you are using with Fetch.

## Resources

- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Open Weather Map API](https://openweathermap.org/)
- [React Documentation](https://reactjs.org/docs/hello-world.html)

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
