# Fyle Frontend Challenge

## Who is this for?

This challenge is meant for candidates who wish to intern at Fyle and work with our engineering team. The candidate should be able to commit to at least 6 months of dedicated time for internship.

## Why work at Fyle?

Fyle is a fast-growing Expense Management SaaS product. We are ~40 strong engineering team at the moment. 

We are an extremely transparent organization. Check out our [careers page](https://careers.fylehq.com) that will give you a glimpse of what it is like to work at Fyle. Also, check out our Glassdoor reviews [here](https://www.glassdoor.co.in/Reviews/Fyle-Reviews-E1723235.htm). You can read stories from our teammates [here](https://stories.fylehq.com).

## Challenge outline

This challenge involves implementing application using github api. 

The services that you need to use are already implemented - check out ApiService.

You can see details of this challenge [here](https://fyleuniverse.notion.site/fyleuniverse/Fyle-Frontend-development-challenge-cb5085e5e0864e769e7b98c694400aaa)

__Note__ - This challenge is in angular. We work on angular frameworks & after you join we expect the same from you. Hence it is required to complete this assignement in angular itself.

## What happens next?

You will hear back within 48 hours from us via email.

## Installation

1. Fork this repository to your github account.
2. Clone the forked repository and proceed with steps mentioned below.

### Install requirements
* Install angular cli [Ref](https://angular.io/cli)
* `npm install` in this repository 

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Further help

Visit the [Angular Documentation](https://angular.io/guide/styleguide) to learn more.
Styling is to be strictly done with [Tailwind](https://tailwindcss.com/docs/installation).

## Running Unit Tests

To run the unit tests for this project, follow these steps:

1. **Install Dependencies**:
    Make sure you have all the necessary dependencies installed. If not, run:
    ```bash
    npm install
    ```

2. **Run the Tests**:
    Use the Angular CLI to run the tests:
    ```bash
    ng test --code-coverage
    ```

3. **Check Coverage**:
    After the tests have run, you can check the code coverage report. It will be generated in the `coverage/` directory. Open the `index.html` file in your browser to see the coverage details.
    ```bash
    open coverage/index.html
    ```

## Testing Summary

- **Service Tests**:
    - Tests are located in `src/app/api.service.spec.ts`.
    - They cover:
      - Creation of the service.
      - Fetching user repositories.
      - Fetching user information.

- **Component Tests**:
    - Tests are located in `src/app/repo-list/repo-list.component.spec.ts`.
    - They cover:
      - Creation of the component.
      - Displaying the list of repositories.
      - Displaying a message when no repositories are found.

## changes to the original challenge

- Show a dropdown to select the page size
- By default, show 10 repositories per page
- Users should be able to choose a maximum of 100 repositories per page.

 Above mentioned was the original chanllenge requirement which I have changed a little since the no. of public repos in the github repos link is max 30 so instead of a dropdown of per page repoa I just added 10 repos per page with a normal pagination.