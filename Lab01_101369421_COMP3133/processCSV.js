const fs = require("fs");
const csv = require("input_countries.csv");

// Function to filter data and write to a file
function filterAndWriteData(inputFile, country, outputFile) {
  const writeStream = fs.createWriteStream(outputFile);

  fs.createReadStream(inputFile)
    .pipe(csv())
    .on("data", (row) => {
      if (row.Country === country) {
        writeStream.write(`${JSON.stringify(row)}\n`);
      }
    })
    .on("end", () => {
      writeStream.end();
      console.log(
        `Filtered data for ${country} has been written to ${outputFile}`
      );
    });
}

// Delete existing files if they exist
["canada.txt", "usa.txt"].forEach((file) => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`${file} has been deleted.`);
  }
});

// Process data for Canada
filterAndWriteData("input_countries.csv", "Canada", "canada.txt");

// Process data for United States
filterAndWriteData("input_countries.csv", "United States", "usa.txt");
