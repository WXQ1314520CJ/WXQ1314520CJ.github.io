import React, { useEffect, useRef } from 'react';

export const Advantages: React.FC = () => {
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startCounting = () => {
      const counters = document.querySelectorAll('.counter');
      
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const duration = 2000; // 动画持续时间（毫秒）
        const step = target / (duration / 16); // 每16ms的增量
        let current = 0;
        
        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.innerText = Math.ceil(current).toString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target + (target === 98 ? '%' : '+');
          }
        };
        
        updateCounter();
      });
    };

    // 使用 Intersection Observer 监测元素是否进入视口
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current);
      }
    };
  }, []);

  return (
    <section id="advantages" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-primary mb-4">核心优势</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-dark/70 text-lg">
            四大核心优势，铸就专业教育咨询服务
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 优势1 */}
          <div className="flex">
            <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-6">
              <span className="text-white font-bold text-xl">01</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-dark mb-3">团队优势</h3>
              <p className="text-dark/70">
                数十位资深志愿填报、高等教育、大学生涯规划、留学及心理健康专家，构建多维度专业体系团队，提供全方位咨询服务。
              </p>
            </div>
          </div>

          {/* 优势2 */}
          <div className="flex">
            <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-6">
              <span className="text-white font-bold text-xl">02</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-dark mb-3">大数据与AI模型优势</h3>
              <p className="text-dark/70">
                依托海量数据与智能AI模型，精准匹配院校专业，为志愿填报提供科学量化决策依据，提高录取成功率。
              </p>
            </div>
          </div>

          {/* 优势3 */}
          <div className="flex">
            <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-6">
              <span className="text-white font-bold text-xl">03</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-dark mb-3">结果导向理念优势</h3>
              <p className="text-dark/70">
                以就业、升学为结果导向，反向设计填报方案，融入大学生涯规划思维，兼顾当下录取与长远发展，让家长后顾无忧。
              </p>
            </div>
          </div>

          {/* 优势4 */}
          <div className="flex">
            <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-6">
              <span className="text-white font-bold text-xl">04</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-dark mb-3">多方资源优势</h3>
              <p className="text-dark/70">
                深度联动海内外教育机构及知名央国企，覆盖考研、考公考编、就业、留学全路径，全程护航学生成长发展。
              </p>
            </div>
          </div>
        </div>

        {/* 数据展示 */}
        <div ref={countersRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-primary text-4xl font-bold mb-2 counter" data-target="5000">0</div>
            <p className="text-dark/70">成功案例</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-primary text-4xl font-bold mb-2 counter" data-target="100">0</div>
            <p className="text-dark/70">资深专家</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-primary text-4xl font-bold mb-2 counter" data-target="98">0</div>
            <p className="text-dark/70">录取成功率</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="text-primary text-4xl font-bold mb-2 counter" data-target="1000">0</div>
            <p className="text-dark/70">合作院校</p>
          </div>
        </div>
      </div>
    </section>
  );
}