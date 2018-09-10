function getParameters(url=window.location.href) {
  if (checkForParameters(url) === true) {
    url = url.slice(url.indexOf('?')+1)
             .replace(/=/g,'&')
             .split('&');
    
    let keys = [],
        vals = [],
        parameters = {};
    
    url.forEach((el,index) => {
      (index % 2 === 0)
        ? keys.push(el)
        : vals.push(el);
    });
  
    for (let i = 0; i < keys.length; i++) {
      parameters[keys[i]] = vals[i];
    }
  
    return parameters;
  }
  else {
    return Error('No parameters in this URL');
  }
}

function getSingleParameter(parameter, url=window.location.href) {
  if (checkForParameters(url) === true) {
    let parameters = getParameters(url);
    const keys = Object.keys(parameters);
    const vals = Object.values(parameters);

    let index = keys.findIndex(el => {
      return el === parameter;
    });

    return (index === -1)
      ? Error('Parameter not found')
      : vals[index];
    
  }
  else {
    return Error('No parameters in this URL');
  }
}

function checkForParameters(url) {
  return (url.indexOf('?') === -1)
    ? false
    : true;
}