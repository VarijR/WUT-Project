fetch('https://freeimage.host/api/1/upload', {
  key: apiKey,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData),
})


