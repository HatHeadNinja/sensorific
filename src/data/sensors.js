import sensorData from './sensors.json'

const sensors = sensorData;

export default sensors;

// function getReadings () {
//   const readingsData = fs.readFileSync('./readings.json', 'utf8');
//   return JSON.parse(readingsData);
// }

// function getSensorReadingsById (readings, sensorId) { 
//   return readings.filter(reading => reading.sensorId === sensorId);
// }

// function getLatestSensorReadingById (readings, sensorId) {
//   // assumes data is sorted chronologically
//   const sensorReadings = getSensorReadingsById(readings, sensorId);
//   return sensorReadings.pop();
// }







