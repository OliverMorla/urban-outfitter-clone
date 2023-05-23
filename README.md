# Urban Outfitter Clone

This is a clone of the Urban Outfitter website built using React.js, Redux, HTML, SCSS, JavaScript, Strapi CMS, Firebase storage and authentication, Framer Motion, Redux for cart management, Context API, and Stripe for payment integration.

![uo-clone1](https://github.com/OliverMorla/urban-outfitter-clone/assets/73266650/612ae3bd-dcf6-4022-8ea6-601b02d41d29)

![uo-clone2](https://github.com/OliverMorla/urban-outfitter-clone/assets/73266650/4c561a25-8e62-439d-b1d1-26e6eda965f9)

## Features

- Browse and search for products
- View product details and images
- Add products to the shopping cart
- Manage the shopping cart with Redux
- Checkout using Stripe payment integration
- User authentication and registration with Firebase
- CMS integration with Strapi for managing product data
- Smooth animations and transitions using Framer Motion
- Responsive design

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- Redux: A predictable state container for JavaScript apps.
- HTML: The standard markup language for creating web pages and applications.
- SCSS: A CSS preprocessor that adds power and elegance to CSS.
- JavaScript: A high-level programming language for adding interactivity to web pages.
- Strapi CMS: A headless CMS that provides an easy-to-use interface for managing content.
- Firebase Storage: A cloud-based storage solution for storing and serving user-generated content.
- Firebase Authentication: A service that provides user authentication and authorization.
- Framer Motion: A library for creating smooth and interactive animations in React.
- Context API: A feature of React that allows for global state management.

## Getting Started

To run this project locally, please follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/urban-outfitter-clone.git
   ```

2. Install the dependencies:

   ```bash
   cd urban-outfitter-clone
   npm install
   ```

3. Set up Firebase:

   - Create a new Firebase project and enable Authentication and Firebase Storage.
   - Obtain your Firebase configuration details.
   - Update the Firebase configuration in the project files.

4. Set up Strapi:

   - Install and set up Strapi CMS following their documentation.
   - Set up a content type for managing products.
   - Import or create sample product data.

5. Set up Stripe:

   - Create a Stripe account and obtain your API keys.
   - Update the Stripe API keys in the project files.

6. Run the project:

   ```bash
   npm start
   ```

7. Open the project in your browser:

   Open [http://localhost:3000](http://localhost:3000) to view it.

## Folder Structure

```
urban-outfitter-clone/
  ├── public/              # Public assets and index.html
  ├── src/                 # Source code
  │   ├── components/      # Reusable components
  │   ├── containers/      # Container components
  │   ├── pages/           # Pages or views
  │   ├── redux/           # Redux store, actions, and reducers
  │   ├── services/        # API services and utilities
  │   ├── styles/          # Global styles and SCSS files
  │   └── App.js           # Main application component
  ├── .env                 # Environment variables
  ├── .gitignore           # Git ignore configuration
  ├── package.json         # NPM package dependencies
  ├── README.md            # Project documentation
  └── webpack.config.js    # Webpack configuration
```

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes.
4. Commit and push your changes.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Strapi](https://strapi.io/)
- [Firebase](https://firebase.google.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Stripe](https://stripe.com/)
