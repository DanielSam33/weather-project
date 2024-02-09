const dropdownInput = document.querySelector('.dropdown-input');
const dropdownContent = document.querySelector('.dropdown-content');


async function filterCountries(query) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);
        const data = await response.json();
        
      
        const countries = data.map(country => country.name.common);
        

        displayDropdown(countries);
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
}


function displayDropdown(filteredCountries) {
    dropdownContent.innerHTML = '';
    filteredCountries.forEach(country => {
        const link = document.createElement('a');
        link.textContent = country;
        dropdownContent.appendChild(link);
    });
    dropdownContent.style.display = filteredCountries.length ? 'block' : 'none';
}


dropdownInput.addEventListener('input', function() {
    const query = dropdownInput.value.trim();
    if (query.length >= 2) { 
        filterCountries(query);
    } else {
        dropdownContent.style.display = 'none';
    }
});


document.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-input')) {
        dropdownContent.style.display = 'none';
    }
});brbro