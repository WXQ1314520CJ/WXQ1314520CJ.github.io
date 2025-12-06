import React from 'react';

export const Teachers: React.FC = () => {
  // 六边形头像样式
  const hexagonStyle = {
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
    transition: 'transform 0.3s ease'
  };

  return (
    <div className="relative">
      {/* 团队介绍Banner */}
      <section className="pt-32 pb-16 bg-primary text-white relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('/images/banner-bg.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold mb-4">资深师资团队</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            以专业经验护航你的成长，用匠心规划你的志愿与生涯
          </p>
        </div>
      </section>

      {/* 3位老师布局 */}
      <section id="teachers" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12">
            {/* 1. 孙老师 */}
            <div className="text-center">
              <div 
                className="w-40 h-48 mx-auto mb-6 overflow-hidden border-4 border-primary/20"
                style={hexagonStyle}
              >
                <img 
                  src="/images/sun teacher.png" 
                  alt="孙老师" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">孙老师</h3>
              <p className="text-lg text-dark/80 mb-3">高级志愿填报规划师</p>
              <p className="text-dark/70 text-sm">
                深耕中学学业与升学赛道，以院校专业适配性为核心，精准锚定考生优势与职业方向，量身定制志愿方案。
              </p>
            </div>

            {/* 2. 李老师 */}
            <div className="text-center">
              <div 
                className="w-40 h-48 mx-auto mb-6 overflow-hidden border-4 border-primary/20"
                style={hexagonStyle}
              >
                <img 
                  src="/images/li teacher.png" 
                  alt="李老师" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">李老师</h3>
              <p className="text-lg text-dark/80 mb-3">就业规划专家</p>
              <p className="text-dark/70 text-sm">
                专注大学生生涯规划与就业指导，凭借丰富的行业经验，为学生提供全方位的职业发展建议。
              </p>
            </div>

            {/* 3. 德荣老师 */}
            <div className="text-center">
              <div 
                className="w-40 h-48 mx-auto mb-6 overflow-hidden border-4 border-primary/20"
                style={hexagonStyle}
              >
                <img 
                  src="/images/derong teacher.png" 
                  alt="德荣老师" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">德荣老师</h3>
              <p className="text-lg text-dark/80 mb-3">心理疗愈专家</p>
              <p className="text-dark/70 text-sm">
                专注青少年心理健康与家庭教育指导，通过专业的心理疏导，为孩子的身心健康成长保驾护航。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}