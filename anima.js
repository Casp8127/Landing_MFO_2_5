// ============================================
// DOM READY EVENT
// Основной код, выполняемый после загрузки DOM
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Деньгисразу: DOM загружен, инициализация компонентов...');

  // ============================================
// КНОПКА НАВЕРХ
// ============================================
function initScrollTop() {
    const btn = document.createElement('button');
    btn.className = 'scroll-top-btn';
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.setAttribute('aria-label', 'Наверх');
    document.body.appendChild(btn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

initScrollTop();
    
        
        // Оптимизация производительности для мобильных
        tickerContent.style.willChange = 'transform';
        tickerContent.style.backfaceVisibility = 'hidden';
        tickerContent.style.transform = 'translate3d(0, 0, 0)';

    // ============================================
    // АНИМАЦИЯ ЭЛЕМЕНТОВ ПРИ ПРОКРУТКЕ (SCROLL REVEAL)
    // ============================================
    
    // Функция для проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= windowHeight - 100 && rect.bottom >= 0;
    }
    
    // Добавляем класс reveal к элементам, которые хотим анимировать при скролле
    const elementsToReveal = document.querySelectorAll('.offer-card, .feature-card, .question-card, .step');
    
    elementsToReveal.forEach(el => {
        el.classList.add('reveal');
    });
    
    // Функция проверки и активации анимации
    function checkReveal() {
        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => {
            if (isElementInViewport(el) && !el.classList.contains('active')) {
                el.classList.add('active');
            }
        });
    }
    
    // Запускаем проверку при загрузке и при скролле
    window.addEventListener('load', checkReveal);
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('resize', checkReveal);
    
    // Дополнительная анимация для карточек при наведении (микро-взаимодействия)
    const allCards = document.querySelectorAll('.offer-card, .feature-card, .question-card');
    
    allCards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            // Легкая пульсация тени
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function(e) {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Анимация для кнопок при нажатии
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(btn => {
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.97)';
        });
        
        btn.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Плавное появление заголовков
    const headers = document.querySelectorAll('h2');
    headers.forEach((header, index) => {
        header.style.opacity = '0';
        header.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
    });
    
    const sectionSubtitles = document.querySelectorAll('.section-subtitle');
    sectionSubtitles.forEach((sub, index) => {
        sub.style.opacity = '0';
        sub.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1 + 0.2}s forwards`;
    });
    
    console.log('Анимации элементов активированы');
    }
    
        // ============================================
    // ДОПОЛНИТЕЛЬНАЯ АНИМАЦИЯ ЛОГОТИПА
    // ============================================
    
    const logo = document.querySelector('.logo');
    const logoSymbol = document.querySelector('.logo-symbol');
    
    if (logo) {
        // Эффект при клике на логотип (возврат на главную с анимацией)
        logo.addEventListener('click', function(e) {
            // Если это не ссылка на главную страницу, добавляем анимацию перехода
            if (window.location.pathname !== '/' && !window.location.pathname.includes('index.html')) {
                e.preventDefault();
                
                // Добавляем анимацию исчезновения
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s ease';
                
                setTimeout(() => {
                    window.location.href = this.getAttribute('href');
                }, 300);
            }
        });
        
        // Эффект "пульсации" при загрузке страницы
        setTimeout(() => {
            logoSymbol.style.animation = 'none';
            void logoSymbol.offsetWidth; // Триггер перерисовки
            logoSymbol.style.animation = 'subtlePulse 0.5s ease';
        }, 500);
        
        // Сброс анимации после завершения
        logoSymbol.addEventListener('animationend', () => {
            logoSymbol.style.animation = '';
        });
        
        // Эффект при наведении на логотип (звуковое сопровождение - опционально)
        // Раскомментируйте если нужен звук (но лучше без звука)
        /*
        logo.addEventListener('mouseenter', () => {
            // Только если пользователь взаимодействовал со страницей
            // new Audio('path/to/click.mp3').play().catch(e => console.log('Audio not supported'));
        });
        */
        
        // Анимация при скролле (логотип уменьшается при скролле вниз)
        let lastScrollTop = 0;
        const header = document.querySelector('.site-header');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                header.style.padding = '12px 0';
                header.style.transition = 'padding 0.3s ease';
            } else {
                header.style.padding = '16px 0';
            }
            
            lastScrollTop = scrollTop;
        });
        
        // Эффект "взгляда" при загрузке страницы
        console.log('Анимация логотипа активирована');
    }
    
    // ============================================
    // FAQ ACCORDION
    // ============================================ */
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFaqItem(question.parentElement);
        });
        
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFaqItem(question.parentElement);
            }
        });
    });
    
    function toggleFaqItem(item) {
        const isActive = item.classList.contains('active');
        
        document.querySelectorAll('.faq-item.active').forEach(activeItem => {
            if (activeItem !== item) {
                activeItem.classList.remove('active');
            }
        });
        
        item.classList.toggle('active');
    }
    // ============================================
    // BUTTON HANDLERS
    // ============================================
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.getAttribute('href') === '#') {
                e.preventDefault();
                console.log('Кнопка "' + button.textContent + '" нажата');
                
                button.style.transform = 'translateY(1px)';
                setTimeout(() => {
                    button.style.transform = '';
                }, 150);
            }
        });
    });
    
    console.log('Деньгисразу: все компоненты инициализированы успешно');
});

// ============================================
// LOAD EVENT
// ============================================
window.addEventListener('load', () => {
    console.log('Деньгисразу: страница полностью загружена');
    
    // Гарантированный запуск бегущей строки после загрузки
    //const tickerContent = document.getElementById('tickerContent');
    if (tickerContent) {
        // Перезапускаем анимацию для надежности
        tickerContent.style.animation = 'none';
        void tickerContent.offsetWidth;
        
        // Устанавливаем анимацию снова
        tickerContent.style.animation = 'ticker 150s linear infinite';
        tickerContent.style.animationPlayState = 'running';
        
        // Особые настройки для Safari на iOS
        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
            tickerContent.style.transform = 'translate3d(0, 0, 0)';
            tickerContent.style.webkitTransform = 'translate3d(0, 0, 0)';
        }
    }
    
    // Отключение анимации для пользователей с prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const tickerContent = document.getElementById('tickerContent');
        if (tickerContent) {
            tickerContent.style.animation = 'none';
            tickerContent.style.paddingLeft = '0';
        }
    }

    // Оптимизация анимации бегущей строки
            const tickerContent = document.querySelector('.ticker-content');
            if (tickerContent) {
                // Клонируем контент для бесшовной анимации
                tickerContent.innerHTML += tickerContent.innerHTML;
                
                // Пауза анимации при наведении
                const ticker = document.querySelector('.ticker');
                ticker.addEventListener('mouseenter', () => {
                    tickerContent.style.animationPlayState = 'paused';
                });
                
                ticker.addEventListener('mouseleave', () => {
                    tickerContent.style.animationPlayState = 'running';
                });
                
                // Оптимизация производительности
                tickerContent.style.willChange = 'transform';
            }

                // ============================================
    // ПЛАВАЮЩАЯ КНОПКА "НАВЕРХ" ДЛЯ МОБИЛЬНЫХ
    // ============================================
    function addScrollTopButton() {
        // Проверяем, существует ли уже кнопка
        if (document.querySelector('.scroll-top-btn')) return;
        
        const scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-top-btn';
        scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        scrollBtn.setAttribute('aria-label', 'Наверх');
        document.body.appendChild(scrollBtn);
        
        // Показываем/скрываем кнопку при прокрутке
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });
        
        // Плавная прокрутка наверх
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Добавляем кнопку только на мобильных устройствах
    if (window.innerWidth <= 768) {
        addScrollTopButton();
    }
    
    // При изменении ориентации - проверяем
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768 && !document.querySelector('.scroll-top-btn')) {
            addScrollTopButton();
        }
    });
});