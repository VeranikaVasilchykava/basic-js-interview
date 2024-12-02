
/** 
    Fetch API Example.

    Description:
        Fetch data from an API and display it in a list.

    Requirements:
        Using fetch retrieve data from the public API https://jsonplaceholder.typicode.com/posts.
        Display the data as a list of titles.

    Bonus Points:
        Handle errors.
*/

function getData(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            data.forEach(post => {
                console.log(post.title);
            });
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching data:', error);
        });
}

async function getData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        json.forEach(post => {
            console.log('title:', post.title);
        });
      } catch (error) {
        console.error(error.message);
      }
}

getData('https://jsonplaceholder.typicode.com/posts');