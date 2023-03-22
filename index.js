
function findMatching(drivers, string) {
    return drivers.filter(driver => {
      
      const lowercaseDriverName = driver.toLowerCase();
      const lowercaseSearchString = string.toLowerCase();
  
      
      return lowercaseDriverName.includes(lowercaseSearchString);
    });
  }

  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }

  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }