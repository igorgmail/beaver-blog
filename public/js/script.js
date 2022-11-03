console.log('Ok');

const wrapMain = document.querySelector('.wrapMain');
const modalBodyArea = document.querySelector('#createBody');
const inputId = document.querySelector('[name = "inputId"]');

wrapMain.addEventListener('click', async (event) => {
  event.preventDefault();
  const inputTag = document.querySelector('[name = "inputTag"]');
  if (event.target.name === 'buttonTag') {
    if (inputTag.value.length > 2) {
      console.log('buttonTag > 2');
      const data = inputTag.value;
      console.log('▶ ⇛ data', data);
      const response = await fetch('/showId', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
      });
      const result = await response.json();
      console.log('▶ ⇛ result', result);
    }
  }

  if (event.target.name === 'buttonId') { console.log('buttonId'); }

  if (event.target.name === 'buttonAll') { console.log('buttonAll'); }
  if (event.target.name === 'buttonCreate') { console.log('buttonCreate'); }
  if (event.target.name === 'modalClose') { console.log('modalClose'); }
  if (event.target.name === 'modalSaveChange') { console.log('modalSaveChange'); }
  // console.log('▶ ⇛ inputTag', inputTag.name);
  // console.log('▶ ⇛ inputTagValue', inputTag.value);
  // const title = event.target.inputTag.value;
  // console.log('▶ ⇛ title', title);
});
