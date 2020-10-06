# country-directory-app
A responsive directory that allows users to:
* view a visual list of all countries with country name, region, population, and flag
* search for a country and view information about it
* filter by geographic region

Built in a 2-hour time limit, using:
* REST Countries API: https://restcountries.eu/
* Angular CLI: 8.3.29
* Angular: 8.2.14
* Node: 12.13.0
* Bootstrap: 5.2.2

## How to Run
* After cloning this repository, run `npm install` to install the project and its dependencies.
* After installation, run `ng serve` to run on a dev server.
* Go to `http://localhost:4200/` to view and interact with the app.


## UI Design Approach
I started the project by thinking about the main use case and potential users for `country-directory-app`.

I assumed that the main use case was to search for a country to learn more about it. I also assumed that the user would fall into two categories: they either know exactly what they're looking for or they only have a vague idea.

### Landing Page
In both cases, I felt that a visual directory would be a great starting point, so I built the landing page as a paginated list of "cards" with the country's name, region, population, and flag. `Note: To change the default page size, change Line 27 in country-app.component.ts`

From here, the user can select a country to view its details, explore the full list of countries, narrow the list by region, or use the search bar to look for a specific country.

### Country Details "Card" (Modal)
I took a lot of liberty in organizing the available country data into 4 categories: "General Information", "Identifiers", "Geographical Information", and "Economy". I did so because I assumed the user would have an easier time digesting the information if it were broken up into sections.

I also took the liberty in tucking the `Translations` field in a Show/Hide button to reduce the amount of information at first glance.

### Search Bar
Initially, the search was simple: after the user types the full or partial country name and clicks `search`, I make a call to the `NAME` API from REST Countries. However, I later realized it was inefficient to make a new call for data I've already fetched, so I improved the search by hooking the input event to a filter. This way, the visual directory also narrows down as the user types out a country's name. I thought this was a great feature add, in case users don't know the complete correct spelling of a country's name.


## UI Development Approach

### Flexbox
Believe it or not, it's my first time building with a flexbox layout! (Admittedly, a chunk of my build time went to learning + debugging my wonky flexbox layout use.) I persevered through it though, because I knew it was the best way to implement a responsive, "card" directory landing page. I'm quite happy with the results, though I wish I had more time to clean up the differing flag sizes.

### Subcomponents
I divided `country-directory-app` into different subcomponents so that it can be easily extended/updated in the future.
* `country-app` the landing page: responsible for building out the header and making the calls to REST Countries API's
* `country-directory` receives the list of countries from `country-app` and passes each country object to `country-card` to be rendered
* `country-card` container for the country data displayed on the landing page and in the modal

### API Calls
All API calls are made from `country-app` and the data is propagated down to the child components as appropriate.

Because the list of countries is finite and the data within are small, I didn't feel the need to paginate the API calls. Instead, I paginated the `ngFor` structural directive instead (using `splice`) for a better user experience.

I made the assumption that REST Countries API's are dependable so I'm only retrying an API call once before showing the error to the user. `Note: the number of retries before failure can be modified in rest-countries.service.ts`


## Future Additions
Because I only had 2 hours for this build, I wasn't able to get to these other features:
* Dark Mode: I had a pretty good idea for implementing Dark Mode using attribute directives, but I just ran out of time. I'll definitely go back and add it because it's also great CSS practice for me.
* Unit Tests: Admittedly a weak point of mine, I'm in the process of learning how to write unit tests with Karma, so I'm planning on revisiting this later to add those tests.
* Accessibility (a11y): I did my best to stick to basic accessibility guidelines (i.e. using the appropriate DOM elements), but there's definitely room for improvement here as I continue to learn more about a11y standards.
