import express from "express";
import { updateButtonCounts } from '../calculator/api/update-statistic.js'
import { getButtonCounts } from '../calculator/api/get-statistic.js'

const app = express();

// Endpoint to update button click statistics
app.post('/api/update-statistic', async (req, res) => {
  const { buttonValue } = req.body;

try {
    await updateButtonCounts(buttonValue);
    res.status(200).send('Button count updated successfully.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating button count.');
  }
});

// Endpoint to get button click statistics
app.get('/api/get-statistic', async (req, res) => {
  try {
    const buttonCounts = await getButtonCounts();
    res.status(200).json(buttonCounts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving button counts.');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});
