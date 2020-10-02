export const loadBigMacData = async () => {
  try {
    const serializedBigMac = localStorage.getItem("bigmac");
    if (serializedBigMac === null) {
      const response = await fetch(
        `https://raw.githubusercontent.com/zelima/big-mac-index/master/data/big-mac-index.csv`
      );
      const data = await response.text();
      const cleanedData = convertCSV(data);

      await saveBigMacData(cleanedData);
      return cleanedData;
    }

    return JSON.parse(serializedBigMac);
  } catch (error) {
    return undefined;
  }
};

export const getRandomCountry = (bigMacList, userCountry) => {
  const filteredBigMacs = bigMacList.filter(
    (element) => element.Country !== userCountry
  );
  return filteredBigMacs[Math.floor(Math.random() * filteredBigMacs.length)];
};

export const getBigMacFromIPVig = (bigMacList, userCountry) => {
  const filteredBigMacs = bigMacList.filter(
    (element) => element.Country === userCountry
  );
  return filteredBigMacs[Math.floor(Math.random() * filteredBigMacs.length)];
};

const saveBigMacData = (state) => {
  try {
    const serializableBigMac = JSON.stringify(state);
    localStorage.setItem("bigmac", serializableBigMac);
  } catch (error) {}
};

const convertCSV = (data) => {
  let finalArray = [];
  const titles = data.slice(0, data.indexOf("\n")).split(",");

  const newTitles = titles.map((item) => {
    return item.replace(/ +/g, "");
  });

  const rows = data.slice(data.indexOf("\n") + 1).split("\n");
  rows.map((row) => {
    const values = row.split(",");
    const singleElement = newTitles.reduce(
      (object, curr, i) => ((object[curr] = values[i]), object),
      {}
    );
    finalArray.push(singleElement);
  });
  return finalArray;
};
