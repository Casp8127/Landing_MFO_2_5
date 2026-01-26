// ============================================
// DOM READY EVENT
// Основной код, выполняемый после загрузки DOM
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Деньгисразу: DOM загружен, инициализация компонентов...');
    
    // ============================================
    // TICKER GENERATION - ПОЛНОСТЬЮ ПЕРЕРАБОТАННЫЙ КОД
    // ============================================
    const tickerContent = document.getElementById('tickerContent');
    if (tickerContent) {
        // Функция для генерации случайного числа одобренных заявок
        function getRandomApprovals() {
            const numbers = [245, 312, 189, 278, 421, 356, 198, 267, 389, 423, 156, 287, 334, 401, 289];
            return numbers[Math.floor(Math.random() * numbers.length)];
        }
        
        // Создаем элементы бегущей строки
        const tickerItems = [];
        
        // Элементы "Получили только что"
        const names = [
            'Леонид', 'Елена', 'Евгений', 'Анна', 'Сергей', 'Мария', 'Дмитрий', 'Ольга', 'Игорь', 'Наталья',
            'Алексей', 'Виктория', 'Павел', 'Светлана', 'Михаил', 'Татьяна', 'Андрей', 'Юлия', 'Роман', 'Екатерина'
        ];
        
        const amounts = [
            '15.000', '20.000', '25.000', '30.000', '35.000', '40.000', '45.000', '50.000', '55.000', '60.000',
            '18.000', '22.000', '28.000', '32.000', '38.000', '42.000', '48.000', '52.000', '58.000', '65.000'
        ];
        
        // Генерируем 15 элементов "Получили только что"
        for (let i = 0; i < 15; i++) {
            const name = names[Math.floor(Math.random() * names.length)];
            const amount = amounts[Math.floor(Math.random() * amounts.length)];
            tickerItems.push(`<span class="ticker-item"><span class="ticker-prefix">Получили только что:</span> ${name} - ${amount} ₽</span>`);
        }
        
        // Генерируем 5 элементов "Одобрили сейчас"
        for (let i = 0; i < 5; i++) {
            tickerItems.push(`<span class="ticker-item ticker-approved"><span class="ticker-prefix">Одобрили сейчас:</span> ${getRandomApprovals()} заявок</span>`);
        }
        
        // Функция для перемешивания массива
        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }
        
        // Перетасовываем элементы
        let shuffledItems = shuffleArray(tickerItems);
        
        // Создаем HTML для бегущей строки (3 копии для бесшовности)
        let tickerHTML = '';
        for (let i = 0; i < 3; i++) {
            shuffledItems.forEach(item => {
                tickerHTML += item;
            });
        }
        
        tickerContent.innerHTML = tickerHTML;
        
        // Пауза при наведении для улучшения UX (десктоп)
        const ticker = document.querySelector('.ticker');
        ticker.addEventListener('mouseenter', () => {
            tickerContent.style.animationPlayState = 'paused';
        });
        
        ticker.addEventListener('mouseleave', () => {
            tickerContent.style.animationPlayState = 'running';
        });
        
        // Пауза при касании для мобильных
        ticker.addEventListener('touchstart', () => {
            tickerContent.style.animationPlayState = 'paused';
        });
        
        ticker.addEventListener('touchend', () => {
            setTimeout(() => {
                tickerContent.style.animationPlayState = 'running';
            }, 1500);
        });
        
        // Оптимизация производительности для мобильных
        tickerContent.style.willChange = 'transform';
        tickerContent.style.backfaceVisibility = 'hidden';
        tickerContent.style.transform = 'translate3d(0, 0, 0)';
    }
    
    // ============================================
    // LOGO ANIMATION FIX
    // ============================================
    const logoSymbol = document.querySelector('.logo-symbol');
    if (logoSymbol) {
        logoSymbol.style.animation = 'none';
        void logoSymbol.offsetWidth;
        logoSymbol.style.animation = 'logoRotate 2s ease-in-out';
        
        if (window.innerWidth <= 768) {
            logoSymbol.style.animation = 'logoRotateMobile 2s ease-in-out';
        }
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
    // REVIEWS TOGGLE
    // ============================================
    const toggleReviewsBtn = document.getElementById('toggleReviews');
    const hiddenReviews = document.getElementById('hiddenReviews');
    
    if (toggleReviewsBtn && hiddenReviews) {
        toggleReviewsBtn.addEventListener('click', toggleReviews);
        
        function toggleReviews() {
            hiddenReviews.classList.toggle('show');
            
            if (hiddenReviews.classList.contains('show')) {
                toggleReviewsBtn.innerHTML = 'Скрыть отзывы <i class="fas fa-chevron-up"></i>';
                toggleReviewsBtn.classList.add('expanded');
            } else {
                toggleReviewsBtn.innerHTML = 'Показать больше отзывов <i class="fas fa-chevron-down"></i>';
                toggleReviewsBtn.classList.remove('expanded');
            }
        }
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
});