// using a javascript

const csv = `album,year,US_peak_chart_post
The White Stripes, 1999, -
De Stijl, 2000, -
White Blood Cells, 2001, 61
Elephant, 2003, 6
Get Behind Me Satan, 2005, 3
Icky Thump, 2007, 2
Under Great White Northern Lights, 2010, 11
Live in Mississippi, 2011, -
Live at the Gold Dollar, 2012, -
Nine Miles from the White City, 2013, -`;

function convertToJson(data) {
  let csvList = {};
  csvList = data.split("\n");
//   console.log(csvList);

  const newKeys = csvList[0].split(",");

  const convertedJson = csvList.map((li) => {
    let obj = {};

    li.split(",").forEach((value, i) => {
      obj[`"${newKeys[i].trim()}"`] = value.trim();
    });

    return obj;
  });
  convertedJson.shift();
  console.log(convertedJson);
  return convertedJson;
}

(function() {
  convertToJson(csv);
})();