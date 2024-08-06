<h1>Task 7: Integrating API Data into the Application</h1>
<h2>Objective:</h2>
    <p>Integrate data from a provided API endpoint into your application and populate the cards with this fetched data.</p>
<h2>Steps:</h2>

<h3>Checkout API Endpoint:</h3>
    <ul>
        <li>Navigate to the provided API endpoint.</li>
        <li>Familiarize yourself with the structure of the data returned by the endpoint, including the fields and format.</li>
    </ul>

<h3>Fetch Data from Endpoint:</h3>
    <ul>
        <li>Within your application, implement a function to fetch data from the API endpoint.</li>
        <li>Use appropriate methods such as <code>fetch()</code> or libraries like Axios to make an HTTP request to the endpoint.</li>
        <li>Ensure that the fetched data is an array of objects that you can use to populate the cards in the next step.</li>
    </ul>

<h3>Populate Cards with Fetched Data:</h3>
    <ul>
        <li>Modify your application logic to replace the existing dummy data with the data fetched from the API endpoint.</li>
        <li>Populate the cards in your application with the fetched data, ensuring that each card corresponds to an object in the array.</li>
        <li>Display relevant information from the fetched data within each card, such as name, title, description, etc.</li>
    </ul>

<h2>API Endpoint:</h2>
    <p>Documentation: <a href="https://documenter.getpostman.com/view/27955515/2sA3rwMEUX">Postman Documentation</a></p>
    <p>Base URL: <a href="https://akil-backend.onrender.com/">https://akil-backend.onrender.com/</a></p>

<h3>Available Endpoints:</h3>
    <ul>
        <li>Get opportunities: <code>/opportunities/search</code> (GET)</li>
        <li>Get opportunity by ID: <code>/opportunities/:id</code> (GET)</li>
        <ul>
            <li>Example: <code>/opportunities/6526382983jsdu8d7</code></li>
        </ul>
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
