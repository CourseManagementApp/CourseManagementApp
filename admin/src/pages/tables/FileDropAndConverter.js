import React, { useState } from 'react';
import Excel from 'exceljs';

function ExcelToJson() {
  const [jsonData, setJsonData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async () => {
      const buffer = reader.result;
      const workbook = new Excel.Workbook();
      await workbook.xlsx.load(buffer);
      const worksheet = workbook.getWorksheet(1);
      const rows = worksheet.getSheetValues();
      const headerRow = rows[0];
      const dataRows = rows.slice(1);
      const jsonData = dataRows.map((row) =>
        row.reduce(
          (obj, cellValue, index) =>
            Object.assign(obj, { [headerRow[index]]: cellValue }),
          {}
        )
      );
      setJsonData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <h1>Excel to JSON Converter</h1>
      <input type="file" onChange={handleFileUpload} />
      {jsonData && (
        <div>
          <h2>JSON Output:</h2>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ExcelToJson;
