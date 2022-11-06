const wrapMain = document.querySelector('.wrapMain');// wrap кнопки показать записи
const signInForm = document.querySelector('#signInForm'); // форма входа
const signUpForm = document.querySelector('#signUpForm'); // форма регистрации
const noRegister = document.querySelector('#noRegister');// el нет регистрации ??

// Блоки показать
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

// элемент Foter modal SignIn
const signInBottom = document.querySelector('.signIn-blockBottom');
// Получили checkbox1
const elCheck1 = document.querySelector('#check1');

elCheck1.addEventListener('click', (event) => {
  // Получили поле password
  const setPasword = signInForm.querySelector('[name="setPassword"]');
  // Меняем тип поля password по условию checkbox
  if (elCheck1.checked === true) setPasword.type = 'text';
  if (elCheck1.checked === false) setPasword.type = 'password';
});

// данные с формы Входа
signInForm.addEventListener('submit', signIn);

async function signIn(event) {
  event.preventDefault();
  const formData = new FormData(signInForm);
  const data = Object.fromEntries(formData);
  const signInRequest = await fetch('/auth/in', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await signInRequest.json();
  console.log('▶ ⇛ result', result);
}

// Открываем второй модальное окно
function showNameForReg() {
  const signInmodal = document.getElementById('signInModal');
  const signUpmodal = document.getElementById('signUpModal');
  const inModal = bootstrap.Modal.getOrCreateInstance(signInmodal);
  const upModal = bootstrap.Modal.getOrCreateInstance(signUpmodal);

  inModal.hide();
  upModal.show();
}
// По нажатию нет регистрации открываем второе модальное окно
noRegister.addEventListener('click', (e) => {
  e.preventDefault();
  showNameForReg();
  console.log('CLICK NO Register');
});
