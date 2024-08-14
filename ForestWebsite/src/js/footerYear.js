 const yearElement = document.querySelector('.footer__copy__paragraph');
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = `&copy; ${currentYear} Forest Group Company Ltd.`;