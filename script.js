const form = document.querySelector('form');
const urlInput = document.querySelector('#urlInput')
const modal = document.querySelector('.modal')
const link = document.querySelector('#link')


form.addEventListener('submit', async (event) => {
  event.preventDefault();

  modal.classList.remove('hidden')
  
  const result = await downloadMp3(urlInput.value)

  link.href = result.data.file
  link.classList.remove('hidden')

  modal.classList.add('hidden')
});

async function downloadMp3(url) {

  const options = {
    method: 'GET',
    url: 'https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess',
    params: {
      url: url,
      format: 'mp3',
      responseFormat: 'json',
      lang: 'en'
    },
    headers: {
      'X-RapidAPI-Key': 'b9cfa18b70mshca5c43de2f67d55p1a81bdjsnec2cdad998fa',
      'X-RapidAPI-Host': 't-one-youtube-converter.p.rapidapi.com'
    }
  };

  const result = await axios.request(options)

  return result
}