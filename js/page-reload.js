window.addEventListener('beforeunload', function (event) {
    try {
      const currentPath = window.location.pathname; // Get current page path
      sessionStorage.setItem('lastPage', currentPath); // Store it in sessionStorage
    } catch (error) {
      // Handle any errors gracefully
      console.error('Error storing last page:', error);
    }
  });
  
  window.addEventListener('load', function () {
    try {
      const lastPage = sessionStorage.getItem('lastPage'); // Check for stored page
      if (lastPage && lastPage !== window.location.pathname) {
        history.replaceState(null, null, lastPage); // Go back to last page
      }
    } catch (error) {
      // Handle any errors gracefully
      console.error('Error restoring last page:', error);
    }
  });
  