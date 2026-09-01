# LAVE Uganda Website

LAVE Uganda is a React website for Life Again for the Vulnerable and Elderly. It presents the organization's mission, impact, leadership, values, donation options, and an image gallery.
## Local Development

Docker Desktop is required for the container workflows.
Start the development server with hot reload:

```sh
docker compose --profile dev up --build
```

Open [http://localhost:3000](http://localhost:3000). Source changes made in this repository are mounted into the container and reload automatically. Stop the service with `Ctrl+C`, then run:
```sh
docker compose --profile dev down
```

Build and preview the production site locally:
```sh
docker compose --profile prod up --build
```

The production preview also uses [http://localhost:3000](http://localhost:3000), so run only one profile at a time. Stop it with `Ctrl+C`, then run `docker compose --profile prod down`.
## Website Structure

```text
src/
	index.js                 React entry point
	App.js                   Application shell, router, and dark-mode context
	App.css                  Application styles
	index.css                Global styles and Tailwind directives
	firebase.js              Firebase client initialization and Firestore export
	components/
		Navbar.jsx             Fixed site navigation and gallery link
		Hero.jsx               Homepage hero, homepage metadata, and section composition
	About.jsx              "How We Work" content and impact statistics
	Blog.jsx               Organization description and leadership contacts
	AllInOne.jsx           Core values grid
	Donations.jsx          Donation options and contact email action
	Footer.jsx             Copyright and social icons
	PhotoGallery.jsx       Gallery route and enlarged-image modal
		carousel.jsx           Carousel component not currently used by App.js
	assets/                  Logos and website images
public/
	index.html               Base HTML document
	manifest.json            Web-app metadata
	robots.txt               Search-crawler directives
	sitemap.xml              Sitemap for search engines
```

### Routes
| Route | Component | Purpose |
| --- | --- | --- |
| `/` | `Hero` | Homepage. Renders the hero, About, organization details, values, donations, and footer sections. |
| `/photoGallery` | `PhotoGallery` | Image gallery with a full-size image modal. |

### Services and Content
- **Frontend:** React 18, React Router, Tailwind CSS, React Icons, and React Helmet Async.
- **Backend service:** Firebase is initialized in `src/firebase.js`; the client uses the hosted `lave-6dadc` Firebase project and Firestore.
- **Payments:** `flutterwave-react-v3` is installed, but the visible donation buttons do not yet initiate a payment flow.
- **Deployment configuration:** `firebase.json` supplies Firebase Hosting, Storage emulator, and hosting rewrite configuration.

## Improvement Priorities
### 1. Complete the donation journey

The two donation buttons in `Donations.jsx` do not have click handlers, so visitors cannot make a donation. Connect them to a tested Flutterwave checkout flow, provide a success/cancel state, and record payment confirmation through a trusted server-side or Firebase function rather than trusting browser input.
### 2. Correct navigation and site links

The Gallery navigation currently uses a React Router link with an absolute `https://laveug.org/photoGallery` target. Change it to the internal `/photoGallery` route so navigation works in local development and in every deployment. Audit and replace the footer's malformed `http:darlinekeith.github.com/lave` link and give each social icon a real, labeled destination.
### 3. Establish clear page metadata

Several homepage sections render their own `Helmet` title and metadata. Because they all mount on the `/` route, the final mounted section can overwrite the page title and description. Keep one authoritative metadata block per route and add canonical URLs, a social-card image that exists, and per-route Open Graph metadata.
### 4. Make content easier to maintain

Organization copy, contacts, impact figures, values, gallery images, and donation options are embedded in components. Move this content into structured data or a CMS/Firebase collection, then validate it before rendering. This lets non-developers update content while keeping the React views focused on presentation.
### 5. Improve accessibility and mobile navigation

Add a mobile navigation control, visible keyboard focus states, and a skip-to-content link. Upgrade the gallery modal with focus trapping, focus restoration on close, dialog semantics, and a close control using an icon with an accessible label. Review color contrast and heading order across the homepage.
### 6. Modernize image delivery and page performance

The repository contains duplicate `assets copy` files and both PNG/WebP variants. Remove unused duplicates, serve modern formats with responsive sizes, set explicit image dimensions, and keep only the hero image eager-loaded. This will reduce the Docker build context and improve mobile loading time.
### 7. Strengthen project quality controls

Add component and route tests for navigation, the donation flow, and gallery keyboard behavior. Add formatting/lint scripts and a CI workflow that runs tests, builds the Docker image, and checks dependencies. Create React App is no longer maintained, so plan a measured migration to Vite after baseline tests are in place.
### 8. Define a local Firebase strategy

The repository configures Firebase Hosting and Storage emulators but the current client is not wired to any emulator, and Firestore has no emulator configuration. Decide whether local development should use the hosted project or isolated emulators, then configure the required emulators and use environment-specific Firebase settings. Do not place private server credentials in `REACT_APP_*` variables because those values are compiled into the browser bundle.
## Useful Commands

```sh
# Run the development container
docker compose --profile dev up --build

# Run a production preview container
docker compose --profile prod up --build

# Stop containers and network resources
docker compose --profile dev down
docker compose --profile prod down

# Build the React app inside the development image
docker compose run --rm dev yarn build
```
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Docker

Docker Desktop is required. The development container mounts this repository and serves the app with hot reload:

```sh
docker compose --profile dev up --build
```

Open [http://localhost:3000](http://localhost:3000). Stop it with `Ctrl+C`; use `docker compose --profile dev down` to remove the container.

To build and preview the production bundle locally:

```sh
docker compose --profile prod up --build
```

Open [http://localhost:3000](http://localhost:3000). Stop it with `Ctrl+C`; use `docker compose --profile prod down` to remove the container.

The two profiles use the same host port, so run only one at a time. React environment variables are embedded into the browser bundle at build time; never use `REACT_APP_*` for server-side secrets.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
