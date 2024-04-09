// "use server";

// import fs from 'fs';

// const readFile = async (path: File) => {
//   const data = await fs.promises.readFile(path, 'utf-8');
//   parseCSV(data);
//   return data;
// };

// const parseCSV = (data) => {
//   const rows = data.split('\n');
//   const headers = rows[0].split(',');
//   const dataRows = rows.slice(1);
//   const parsedData = [];

//   for (const row of dataRows) {
//     const values = row.split(',');
//     const parsedRow = {};

//     for (let i = 0; i < headers.length; i++) {
//       parsedRow[headers[i]] = values[i];
//     }

//     parsedData.push(parsedRow);
//   }

//   return parsedData;
// };

// const readCSV = async (path) => {
//   const data = await readFile(path);
//   const parsedData = parseCSV(data);
//   return parsedData;
// };

// export default readCSV;