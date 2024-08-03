
# API Project

This repository contains a RESTful API built with Express.js and deployed on Vercel. The API provides endpoints to interact with data stored in a JSON file.

## Features

- **Endpoints:**
  - `GET /` - Returns a message indicating that the API is up and running.
  - `GET /all` - Retrieves all records from the data file.
  - `GET /all/:id` - Retrieves a specific record by `id` from the data file.

- **Data Storage:** Data is stored in a JSON file located in the `vercel` directory.

- **Deployment:** The API is deployed on Vercel. You can access the live API at [https://testing-topaz-phi.vercel.app/](https://testing-topaz-phi.vercel.app/).

## Getting Started

To run this project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
