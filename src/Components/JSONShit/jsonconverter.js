import React, { useState } from "react";

export default function JsonConverter() {
  const [inputValue, setInputValue] = useState("");

  function changeInput(event) {
    setInputValue(event.target.value);
  }

  function convertJson() {
    const newObj = JSON.parse(inputValue);
    //JSON.parse(inputValue);
    console.log(inputValue);
    /* For the keys of mainDetailsData, meterDetailsData, usageRatesData 
      and auxilliaryDetailsData, convert each key-value pair into and object
      with keys of key and value and values of the key and value given
      */
    const categoriesToChange = [
      "AuxiliaryDetailsData",
      "MainDetailsData",
      "MeterDetailsData",
      "UsageRatesData",
    ];

    for (let category in newObj.docusignDetails) {
      if (categoriesToChange.includes(category)) {
        const currentCategory = newObj.docusignDetails[category];
        console.log(category);
        const newCategory = [];
        for (let key in currentCategory) {
          newCategory.push({ key: key, value: currentCategory[key] });
        }
        console.log(newCategory);
        newObj.docusignDetails[category] = newCategory;
      } else {
        continue;
      }
    }

    //const convertedJson = JSON.stringify(newObj);
    //console.log(convertedJson);

    setInputValue(JSON.stringify(newObj));
  }

  return (
    <div>
      <br></br>
      <h4>JSON Converter</h4>
      <input type="text" onChange={changeInput} value={inputValue}></input>
      <button onClick={convertJson}>Convert</button>
    </div>
  );
}
