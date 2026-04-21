import { initScrollReveal } from './modules/animations/scrollReveal.js';
import { initBackToTop } from './modules/animations/backToTop.js';

import { initMobileMenu } from './modules/ui/mobileMenu.js';
import { initLocationToggle } from './modules/ui/locationToggle.js';
import { initMobileFooterAccordion } from './modules/ui/mobileFooterAccordion.js';
import { initAllPasswordToggles } from './modules/ui/passwordToggle.js';

import { initRegister } from './modules/forms/register.js';
import { initLogin } from './modules/forms/login.js';
import { initPriceRange } from './modules/forms/priceRange.js';

import { initImageSlider } from './modules/features/imageSlider.js';
import { initCarCatalog } from './modules/features/carCatalog.js';

import { initUserStatus } from './modules/auth/userStatus.js';

function initIfExists(selector, initFn) {
    if (document.querySelector(selector)) {
        initFn();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initBackToTop();
    initMobileMenu();
    initMobileFooterAccordion();
    initAllPasswordToggles();
    initUserStatus();

    initIfExists('#submitRegisterButton', initRegister);
    initIfExists('#submitLoginButton', initLogin);
    initIfExists('#nextSlide', initImageSlider);
    initIfExists('#priceOutput', initPriceRange);
    initIfExists('#location', initLocationToggle);
    initIfExists('#allCars', initCarCatalog);
});
