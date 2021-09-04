const clearLocalStorage = () => {
  const createdTime = localStorage.getItem('createdTime');
  const currentTime = Date.now();
  const resetExpiryTime = () =>
    localStorage.setItem('createdTime', currentTime);

  if (!createdTime) return resetExpiryTime();

  // NOTE after 5 secs then clear localStorage up (5*1000)
  // NOTE change to longer time after testing
  if (currentTime - createdTime > 5000) {
    alert('clear: Do Something'); // render modal, redirect etc.
    localStorage.clear(); // clear all or only clear specific data
    return resetExpiryTime();
  }

  resetExpiryTime(); //postpone/reset the expired time if still under the allowed expiration
};

clearLocalStorage();
