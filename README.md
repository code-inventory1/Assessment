# NYT Article App

This is a **React application** that fetches and displays New York Times articles using Axios. The project follows best practices, including linting with ESLint and code quality analysis using SonarQube.

## 🚀 Features
- Fetch and display articles from the **New York Times API**
- Navigation bar with links to different sections
- Responsive UI built with **React**
- Unit tests using **Jest & React Testing Library**
- End-to-end tests using **Cypress**
- Code quality checks using **ESLint & SonarQube**

---

## 📦 Installation & Setup

### 1️⃣ Prerequisites
Ensure you have the following installed on your machine:
- **Node.js (18.x or later)** → [Download](https://nodejs.org/)
- **npm or yarn** (comes with Node.js)

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/nyt-article-app.git
cd nyt-article-app
```

### 3️⃣ Install Dependencies
```sh
npm install
# or
yarn install
```

### 4️⃣ Start the Development Server
```sh
npm start
# or
yarn start
```
Runs the app in development mode at **http://localhost:3000/**.

### 5️⃣ Build for Production
```sh
npm run build
# or
yarn build
```
Generates an optimized production build in the **build/** folder.

---

## ✅ Running Tests
To run unit tests with **Jest & React Testing Library**:
```sh
npm test
# or
yarn test
```

To check test coverage:
```sh
npm test -- --coverage
```

### 🧫 Running End-to-End Tests with Cypress
Cypress is used for automated end-to-end testing.

#### 1️⃣ Install Cypress
```sh
npm install cypress --save-dev
# or
yarn add cypress --dev
```

#### 2️⃣ Open Cypress Test Runner
```sh
npx cypress open
# or
yarn cypress open
```

#### 3️⃣ Run Cypress Tests in Headless Mode
```sh
npx cypress run
# or
yarn cypress run
```

---

## 🔍 Code Linting & Formatting
To check for ESLint errors:
```sh
npm run lint
```
To automatically fix linting issues:
```sh
npm run lint -- --fix
```

---

## 📊 SonarQube Code Analysis (Optional)
SonarQube helps in maintaining code quality by identifying bugs, vulnerabilities, and code smells.

### 1️⃣ Use SonarCloud (Cloud-based)
If you don’t want to install SonarQube locally, you can analyze your project using **SonarCloud**:
1. Sign up at [SonarCloud](https://sonarcloud.io/)
2. Set up a project and obtain the **Sonar token**
3. Run the analysis using:
   ```sh
   npx sonarqube-scanner
   ```

### 2️⃣ Install SonarQube Locally (Docker)
If you prefer to run SonarQube locally:
```sh
docker run -d --name sonarqube -p 9000:9000 sonarqube:lts
```
Then access it at **http://localhost:9000/** and configure the project.

---

## 📝 Environment Variables
Create a **.env** file in the root directory and add the required API key for fetching NY Times articles:
```
REACT_APP_NYT_API_KEY=your_api_key_here
```
To obtain an API key, visit [NY Times Developer Portal](https://developer.nytimes.com/).

---

## 📄 Folder Structure
```
nyt-article-app/
├── public/             # Static assets
├── src/                # Main source code
│   ├── components/     # UI Components
│   ├── pages/          # Page Components
│   ├── __tests__/      # Unit tests
│   ├── cypress/        # Cypress tests
│   ├── App.js         # Main application component
│   ├── index.js       # Entry point
│   ├── api.js         # API request handlers
├── .env                # Environment variables
├── .eslintrc.js        # ESLint config
├── cypress.config.js   # Cypress configuration
├── package.json        # Dependencies & scripts
├── README.md           # Documentation
```

---

## 💡 Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Added feature"`)
4. Push to your branch (`git push origin feature-name`)
5. Create a Pull Request

---

## 💜 License
This project is licensed under the **MIT License**.

