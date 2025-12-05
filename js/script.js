// 平滑滚动功能
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// 表单提交处理
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const name = this.name.value;
        const phone = this.phone.value;
        const message = this.message.value;
        
        // 简单验证
        if (!name || !phone || !message) {
            alert('请填写所有必填字段');
            return;
        }
        
        // 模拟提交过程
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // 显示提交状态
        submitButton.textContent = '提交中...';
        submitButton.disabled = true;
        
        // 模拟服务器请求
        setTimeout(() => {
            // 恢复按钮状态
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // 显示成功消息
            alert('感谢您的咨询！我们会尽快与您联系。');
            
            // 重置表单
            this.reset();
        }, 1500);
    });
}

// 添加动画效果到页面元素
document.addEventListener('DOMContentLoaded', function() {
    // 动画观察器
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animateElements = document.querySelectorAll('section h2, .service-category, .team-member, #contact-form');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(el);
    });
    
    // 添加动画类
    const style = document.createElement('style');
    style.textContent = `
        .animated {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});

// 返回顶部按钮
document.addEventListener('DOMContentLoaded', function() {
    // 创建返回顶部按钮
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.id = 'backToTop';
    backToTopButton.title = '返回顶部';
    document.body.appendChild(backToTopButton);
    
    // 添加样式
    const buttonStyle = document.createElement('style');
    buttonStyle.textContent = `
        #backToTop {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            display: none;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
        }
        
        #backToTop:hover {
            background-color: #0069d9;
            transform: translateY(-3px);
        }
    `;
    document.head.appendChild(buttonStyle);
    
    // 滚动事件监听
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // 点击事件
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    // 检查是否需要移动端菜单
    const nav = document.querySelector('nav');
    if (window.innerWidth <= 768 && nav) {
        // 创建汉堡菜单按钮
        const menuButton = document.createElement('button');
        menuButton.innerHTML = '☰';
        menuButton.id = 'mobileMenuToggle';
        menuButton.setAttribute('aria-label', '切换菜单');
        
        // 添加样式
        const menuStyle = document.createElement('style');
        menuStyle.textContent = `
            #mobileMenuToggle {
                display: none;
                position: absolute;
                top: 20px;
                right: 20px;
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                z-index: 1001;
            }
            
            @media (max-width: 768px) {
                #mobileMenuToggle {
                    display: block;
                }
                
                nav {
                    position: relative;
                }
                
                nav a {
                    display: none;
                }
                
                nav.active a {
                    display: block;
                    padding: 15px;
                    text-align: center;
                    border-bottom: 1px solid #eee;
                }
            }
        `;
        document.head.appendChild(menuStyle);
        
        // 插入按钮
        nav.parentNode.insertBefore(menuButton, nav);
        
        // 切换菜单
        menuButton.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
});