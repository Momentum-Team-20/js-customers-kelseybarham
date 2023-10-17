const customerDisplay = document.querySelector('.customer-container')




function showCustomerInformation(customerArray) {
    for (let customer of customerArray) {
        let customerBox = document.createElement('div')
        customerBox.classList.add("customers")
        let customerName = document.createElement('h2')
        customerName.innerText = `${customer.name.first} ${customer.name.last}`
        customerBox.appendChild(customerName)
        //profile photos
        let profilePhoto = document.createElement('img')
        profilePhoto.src = customer.picture.medium
        customerBox.appendChild(profilePhoto)
        //email addresses
        let customerEmail = document.createElement('div')
        customerEmail.innerText = customer.email
        customerBox.appendChild(customerEmail)
        //addresses
        let customerAddress = document.createElement('div')
        customerAddress.innerText = `${customer.location.street.number}\n${customer.location.city}, ${nameToAbbr(customer.location.state)}, ${customer.location.postcode}`
        customerBox.appendChild(customerAddress)
        //date of birth
        let customerBirthdate = document.createElement('div')
        customerBirthdate.innerText = `DOB: ${moment(customer.dob.date).format("MMM Do YYYY")}`
        customerBox.appendChild(customerBirthdate)
        //date registered
        let customerRegistered = document.createElement('div')
        customerRegistered.innerText = `Customer since: ${moment(customer.registered.date).format("MMM Do YYYY")}`
        customerBox.appendChild(customerRegistered)
        customerDisplay.appendChild(customerBox)
    }
}



showCustomerInformation(customers)
