const express = require('express');
const axios = require('axios');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

const port = process.env.PORT || 3002;

app.use((req, res, next) => {
  const requestApiKey = req.headers['x-api-key'];
  if (apikeys.includes(requestApiKey)) {
    next();
  } else {
    res.status(403).send('Forbidden: Invalid API key');
  }
});

const apiRouter = express.Router();

apiRouter.post('/cekkuota', async (req, res) => {
  const { msisdn } = req.body;
// --
// (mwehehe, next time yah)
// --
    if (response.data.status === true) {
      const rawData = response.data.data.hasil;
      const data = processKuotaData(rawData);

      res.json({
        status: true,
        message: 'sukses',
        data
      });
    } else {
      res.status(400).json({
        status: false,
        message: response.data.message || 'gagal',
        error: response.data.data.keteranganError || 'Tidak ada keterangan error'
      });
    }

  try {}

  catch (error) {
    res.status(500).json({
      status: false,
      message: 'Terjadi kesalahan saat memeriksa kuota',
      error: error.message || 'Kesalahan tidak diketahui'
    });
  }
  
});

app.use('/api/v1', apiRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/api/v1`);
});