const onEscapeHandler = (e) => {
  if (e.key === "Escape") {
    hideModal();
  }
};

const showModal = () => {
  const modalEl = document.querySelector(".modalWindow");
  modalEl.classList.remove("hidden");
  const backDrop = document.querySelector(".backdrop");
  backDrop.classList.remove("hidden");
  document.addEventListener("keydown", onEscapeHandler);
};

const hideModal = () => {
  document.querySelector(".modalWindow").classList.add("hidden");
  document.querySelector(".backdrop").classList.add("hidden");
  document.removeEventListener("keydown", onEscapeHandler);
};

const openModal = (num) => {
  let myAnswer = "";
  let requirement = "";
  switch (num) {
    case 0:
      requirement = "Вік від 18 років, хлопець чи дівчина";
      myAnswer = "Я хлопець, мені точно більше 18 років))";
      break;
    case 1:
      requirement = "Знання HTML, CSS";
      myAnswer =
        "Я добре знаю HTML5 , CSS, SASS та використовую ці знання вже більше 5 років. Також знайомий з CSS-анімацією, адаптивною, респонсивною версткою та графікою";
      break;
    case 2:
      requirement = "Буде плюсом базові знання JavaScript";
      myAnswer =
        "Я знаю JavaScript не тільки на базовому рівні, але багато працював і з асинхронними запитами на сервер (CRUD, REST-API, AJAX), використовував localStorage, sessionStorage, збирав проєкти за допомогою. npm у Parcel, Webpack.  <br/> Знаю React, Redux, Handlebars, Axios та багато інших бібліотек та фреймворків  ";
      break;
    case 3:
      requirement = "Буде плюсом знання фреймворку Bootstrap або інших";
      myAnswer =
        "Користувався як Bootstrap, так і Tailwind, Material UI, Notiflix, react-toaster, formik та багатьма іншими бібліотеками та фреймворками ";
      break;
    case 4:
      requirement = "Знання фотошопу чи інших аналогічних програм";
      myAnswer =
        "Впевнений юзер Photoshop, Illustartor, Figma. <br/> Працюю також у відео та музичних редакторах (Filmora, Cubase)";
      break;
    case 5:
      requirement = "Потрібна креативність";
      myAnswer =
        "Креативності в моїй біографії аж забагато. Працював копірайтером, контент-менеджером, креативним-директором. Більше подробиць - у резюме.<br/> Відзначу лише, що для мене креатив - це створення ідеї, а не картинки. Я - не дизайнер, не стиліст і ніколи не любив малювати))";
      break;
    case 6:
      requirement = "Вміння працювати в команді";
      myAnswer =
        "Всі кажуть, зі мною комфортно працювати. Я не педант, але завжди мислю раціонально. Витримую дедлайни, поважаю конструктивну критику. Вмію йти за лідером, можу вести за собою. Я завжди на зв'язку та готовий швидко підключитися до нової задачі";
      break;
    case 7:
      requirement =
        "Не обов’язково, але буде плюсом будь-які знання на тему криптовалюти/інвестиційних проєктів";
      myAnswer =
        "Колись грався з криптою, мав біткойни, вчасно продав)) Знаю основні біржі, маю уявлення про блокчейн, регулярно проглядаю новини на фінансову тематику. <br/>Інвестував, і неодноразово, свої кошти у банківські та небанківські активи.";
      break;

    default:
      break;
  }
  showModal();
  document.querySelector(".demand").innerHTML = requirement;
  document.querySelector(".answer").innerHTML = myAnswer;
};

const closeModal = (e) => {
  if (e.target === e.currentTarget) {
    hideModal();
  }
};

const listElement = document.querySelector("ul");
let listItems = "";
for (let i = 0; i < 8; i += 1) {
  listItems += `<li style="margin-top: ${
    7 + i * 4.5
  }%" onClick="openModal(${i})" id=${i}></li>`;
}

listElement.insertAdjacentHTML("beforeend", listItems);
