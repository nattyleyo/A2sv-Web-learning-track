<h1>Task 7: Integrating API Data into the Application</h1>

<h2>Objective</h2>
    <p>Integrate data from a provided API endpoint into your application and populate the cards with this fetched data.</p>

<h2>Steps Completed</h2>

<h3>1. Checkout API Endpoint</h3>
    <ul>
        <li>Navigated to the provided API endpoint.</li>
        <li>Familiarized myself with the structure of the data returned by the endpoint, including the fields and format.</li>
    </ul>

<h3>2. Fetch Data from Endpoint</h3>
    <ul>
        <li>Implemented a function to fetch data from the API endpoint.</li>
        <li>Used the <code>fetch()</code> method to make an HTTP request to the endpoint.</li>
        <li>Ensured that the fetched data is an array of objects that can be used to populate the cards.</li>
    </ul>

<h3>3. Populate Cards with Fetched Data</h3>
    <ul>
        <li>Modified the application logic to replace the existing dummy data with the data fetched from the API endpoint.</li>
        <li>Populated the cards in the application with the fetched data, ensuring that each card corresponds to an object in the array.</li>
        <li>Displayed relevant information from the fetched data within each card, such as name, title, description, etc.</li>
    </ul>

<h2>Redux Toolkit for State Management</h2>

<h3>Implementation</h3>
    <ul>
        <li>Applied Redux Toolkit for state management to ensure efficient data handling.</li>
        <li>Server requests are made once to fetch data, which is then stored in the Redux store.</li>
        <li>Fetched data is utilized throughout the application from the Redux store, improving performance and state consistency.</li>
    </ul>

<h2>API Endpoint</h2>
    <p>Documentation: <a href="https://documenter.getpostman.com/view/27955515/2sA3rwMEUX">Postman Documentation</a></p>
    <p>Base URL: <a href="https://akil-backend.onrender.com/">https://akil-backend.onrender.com/</a></p>

<h3>Available Endpoints</h3>
    <ul>
        <li>Get opportunities: <code>/opportunities/search</code> (GET)</li>
        <li>Get opportunity by ID: <code>/opportunities/:id</code> (GET)</li>
        <li>Example: <code>/opportunities/6526382983jsdu8d7</code></li>
    </ul>

<h3>UI References:</h3>
    <p><a href="Job Card UI">Job Card UI</a></p>
    <p><a href="Figma file">Figma file</a></p>
<h2>Screenshots</h2>
    <p>Screenshot 1:</p>
    <img src="/task-7/public/assets/Screenshot-1.png" alt="Screenshot of Add Task Feature" />
    <p>Screenshot 2:</p>
    <img src="/task-7/public/assets/Screenshot-2.png" alt="Screenshot of Edit Task Feature" />
    <p>Screenshot 3:</p>
    <img src="/task-7/public/assets/Screenshot-3.png" alt="Screenshot of Edit Task Feature" />
