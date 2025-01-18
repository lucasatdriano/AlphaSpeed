import { initScrollReveal } from './modules/scrollReveal.js';
import { initButtonToTop } from './modules/scrollTop.js';
import { initToggleMenuMobile } from './modules/navbarMobile.js';
import { initCarrossel } from './modules/carrossel.js';
import { initLabelRange } from './modules/valueRange.js';
import { initCars } from './modules/cars.js';
import { initOpenSectionLocal } from './modules/openLocal.js';
import { initFooterLinksToggle } from './modules/mostMore.js';
import { initButtonLogged } from './modules/logged.js';
import { initLogin, initVisibilityInputPassword } from './modules/login.js';
import { initRedirectButtonCadastro } from './modules/redirect.js';
import { initCadastro, initBtnVisibilityCadastro } from './modules/cadastro.js';

function safeInit(selector, initFunction) {
    if (document.querySelector(selector)) {
        initFunction();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initButtonToTop();
    initToggleMenuMobile();
    initButtonLogged();

    safeInit('#btnRedCadastre', initRedirectButtonCadastro);
    safeInit('#btnSubmitCadastrar', initCadastro);
    safeInit('#btnSubmitLogin', initLogin);
    safeInit('#setaSlidesProx', initCarrossel);
    safeInit('#value', initLabelRange);
    safeInit('#local', initOpenSectionLocal);
    safeInit('#moreUm', initFooterLinksToggle);
    safeInit('#verConfirmSenha', initBtnVisibilityCadastro);
    safeInit('#verSenhaLogin', initVisibilityInputPassword);
    safeInit('#todosCarros', initCars);
});
