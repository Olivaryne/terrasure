const express = require('express');
const { analyzeDocument } = require('../services/textract.service');
const { compareImages } = require('../services/rekognition.service');
const { generateDescription } = require('../services/gpt.service');

const router = express.Router();

router.post('/verify-document', async (req, res) => {
  const { bucket, fileName } = req.body;
  const result = await analyzeDocument(bucket, fileName);
  res.json(result);
});

router.post('/compare-images', async (req, res) => {
  const { sourceImg, targetImg, bucket } = req.body;
  const result = await compareImages(sourceImg, targetImg, bucket);
  res.json(result);
});

router.post('/generate-description', async (req, res) => {
  const { features } = req.body;
  const description = await generateDescription(features);
  res.json({ description });
});

module.exports = router;
