document.getElementById('service-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const location = document.getElementById('location').value;
    const issue = document.getElementById('issue').value;

    // Here, you can send the service request to the backend using AJAX/fetch API
    // Example: Send a POST request to the server and handle the response accordingly

    // For demonstration purposes, let's log the service request data
    console.log('Service Request Submitted:');
    console.log('Location: ' + location);
    console.log('Issue: ' + issue);

    // Clear the form fields after submission
    document.getElementById('location').value = '';
    document.getElementById('issue').value = '';
});

// Example of displaying service provider results (dummy data)
const serviceProviders = ['Towing Service', 'Mechanic', 'Roadside Assistance'];
const serviceProviderList = document.getElementById('service-provider-list');

serviceProviders.forEach(provider => {
    const listItem = document.createElement('li');
    listItem.textContent = provider;
    serviceProviderList.appendChild(listItem);
});
