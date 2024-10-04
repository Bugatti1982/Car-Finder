

# Car Finder

A repository for finding car make, model, and price with purchasing functionality. This project includes two primary APIs: one for vehicle data retrieval and another for shopping cart management.

## Features

- **API 1:** Provides the make, model, and price of vehicles.
- **API 2:** Handles shopping cart functionality for purchasing cars.

## User Story

As a user, I want to search for cars by specific criteria such as make, model, price, and year, compare different vehicles, and purchase a selected vehicle using a shopping cart.

## Acceptance Criteria

- The system should prompt the user for details such as vehicle type, price range, make, model, and year.
- The user should be able to view and compare vehicles in a structured table format.
- Once a car is selected, the user can add it to a shopping cart for purchase.

## Project Setup

![Car Selection Database](Assets/diagram-export-10-2-2024-9_05_09-pm_720.png)

* Cars
  * id: Name String
  * make: id name string
  * Model: id name string
  * Year: id year int
  * Price: id amount decimal


### Frontend Details

The front end will provide the user interface for vehicle search, comparison, and shopping cart management.

### Backend Details

The backend will manage vehicle data retrieval and process transactions, similar to the front-end functionality but focused on API calls and data handling.

## Project Description

Car Finder enables users to easily search for vehicles, compare them side-by-side, and complete a purchase, all in one seamless experience.

### Required Modules

- **PostgreSQL** - For managing the car database and storing vehicle and user information.
- **Node.js** - For server-side API development.

## Table of Contents

 -[Installation](#installation)
 -[Usage](#usage)
 -[Testing](#testing)
 -[Contributing](#contributing)
 -[Questions](#questions)

## Installation

1. Clone the repository:  
   `git clone https://github.com/Bugatti1982/Car-Finder`
2. Install dependencies:  
   `npm install`
3. Set up the PostgreSQL database using the provided schema.
4. Run the application:  
   `npm start`

## Video Demonstration

_A video demonstration link will be added here once the project is fully implemented._

## Usage

After installation, launch the app to search for vehicles, compare them and add your preferred vehicle to the shopping cart for purchase.

## Testing

Testing functionality is not currently implemented. Future updates will include testing configurations.

## Contributing

Contributions are welcome! If you’d like to contribute, feel free to create a pull request or check out the issues section.

### Resources

- [Product Price Comparison in SQL](https://stackoverflow.com/questions/19841022/product-price-comparison-in-sql)
- [HTML & CSS Price Comparison Table Tutorial](https://www.youtube.com/watch?v=Ki2HbIMZTgg)

## Questions

For questions or further assistance, feel free to reach out via GitHub or raise an issue in the repository.
