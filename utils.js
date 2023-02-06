let inProdEnvironment = false;

if (process && process.env.NEXT_PUBLIC_ENVIRONMENT === 'production') {
  inProdEnvironment = true;
}

function shuffle(arr) {
  const tempArr = arr
  for (var i = tempArr.length - 1; i >= 1; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = tempArr[i];
      arr[i] = tempArr[j];
      arr[j] = temp;
  }
  return tempArr;
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export { inProdEnvironment, shuffle, a11yProps };