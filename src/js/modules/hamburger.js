export function init() {
	const hamburger = document.querySelector('#hamburger');
	const hamburgerPopup = document.querySelector('#hamburger-popup');
	const body = document.body;

	// Клонируем меню, чтобы задать свои стили для мобильной версии
	const navigation = document.querySelector('.navigation-js').cloneNode(true);
	const menu = document.querySelector('.menu-js').cloneNode(true);

	// При клике на иконку hamburger вызываем ф-ию hambHandler
	hamburger.addEventListener('click', hambHandler);

	// Выполняем действия при клике ..
	function hambHandler(e) {
		const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
		e.preventDefault();
		// Переключаем стили элементов при клике
		hamburger.classList.toggle('hamburger--active');
		hamburgerPopup.classList.toggle('hamburger__popup-menu--open');
		body.classList.toggle('no-scroll');
		body.style.paddingRight = lockPaddingValue;
		renderPopup();
	}

	// Здесь мы рендерим элементы в наш попап
	function renderPopup() {
		hamburgerPopup.append(navigation, menu);
	}

	// Код для закрытия меню при нажатии на ссылку
	const navigationLinks = Array.from(navigation.children);
	const menuLinks = Array.from(menu.children);
	const links = navigationLinks.concat(menuLinks);

	// Для каждого элемента меню при клике вызываем ф-ию
	links.forEach((link) => {
		link.addEventListener('click', closeOnClick);
	});

	// Закрытие попапа при клике на меню
	function closeOnClick() {
		hamburgerPopup.classList.remove('hamburger__popup-menu--open');
		hamburger.classList.remove('hamburger--active');
		body.classList.remove('no-scroll');
	}
}
