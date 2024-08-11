<h1>Task 7:User Authentication Implementation</h1>

<section>
        <h2>Overview</h2>
        <p>This project implements user authentication using NextAuth, including signup and signin functionality. The signup and signin pages are designed with attention to layout, forms, and usability, integrating with provided API endpoints for secure user registration and authentication.</p>
    </section>

<section>
        <h2>Features</h2>
        <ul>
            <li><strong>Signup and Signin Pages:</strong> Two separate components for user signup and signin, designed following best practices for usability and accessibility.</li>
            <li><strong>Signup Logic:</strong> Captures user input, sends a POST request to the <code>/signup</code> endpoint, and handles server responses.</li>
            <li><strong>Signin Logic:</strong> Captures user input, sends a POST request to the <code>/login</code> endpoint, retrieves the access token, and manages authentication status.</li>
            <li><strong>Client-Side Validation:</strong> Implements input validation to enhance user experience and minimize unnecessary server requests.</li>
            <li><strong>Security:</strong> Secure handling of sensitive user data, such as passwords and access tokens.</li>
        </ul>
    </section>

<section>
        <h2>API Endpoints</h2>
        <p><strong>Base URL:</strong> <a href="https://akil-backend.onrender.com/" target="_blank">https://akil-backend.onrender.com/</a></p>

<h3>Signup:</h3>
        <p><strong>POST</strong> <code>/signup</code></p>
        <div class="code-block">
            <pre>
{
    "name": "string",
    "email": "string",
    "password": "string",
    "confirmPassword": "string",
    "role": "string"
}
            </pre>
        </div>

<h3>Verify Email:</h3>
        <p><strong>POST</strong> <code>/verify-email</code></p>
        <div class="code-block">
            <pre>
{
    "email": "string",
    "OTP": "string"
}
            </pre>
        </div>
<h3>Signin:</h3>
        <p><strong>POST</strong> <code>/login</code></p>
        <div class="code-block">
            <pre>
{
    "email": "string",
    "password": "string"
}
            </pre>
        </div>
    </section>

<h3>UI References:</h3>
    <p><a href="Job Card UI">Job Card UI</a></p>
    <p><a href="Figma file">Figma file</a></p>
<h2>Screenshots</h2>
    <p>Screenshot 1.1:</p>
    <img src="/final-task/public/assets/Screenshot-1.png" alt="Screenshot of Add Task Feature" />
    <p>Screenshot 1.2:</p>
    <img src="/final-task/public/assets/Screenshot-2.png" alt="Screenshot of Edit Task Feature" />
    <p>Screenshot 1.3:</p>
    <img src="/final-task/public/assets/Screenshot-12.png" alt="Screenshot of Edit Task Feature" />
    <p>Screenshot 2.1:</p>
    <img src="/final-task/public/assets/Screenshot-13.png" alt="Screenshot of Edit Task Feature" />
    <p>Screenshot 2.2:</p>
    <img src="/final-task/public/assets/Screenshot-3.png" alt="Screenshot of Edit Task Feature" />
    <p>Screenshot 2.3:</p>
    <img src="/final-task/public/assets/Screenshot-4.png" alt="Screenshot of Edit Task Feature" />
    <p>Screenshot 2.4:</p>
    <img src="/final-task/public/assets/Screenshot-5.png" alt="Screenshot of Edit Task Feature" />
    <p>Screenshot 2.5:</p>
    <img src="/final-task/public/assets/Screenshot-6.png" alt="Screenshot of Edit Task Feature" />
