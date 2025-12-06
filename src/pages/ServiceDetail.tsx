import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

// 服务数据
const serviceData = {
  'volunteer': {
    title: '志愿填报规划服务',
    description: '依托AI大数据与资深专家经验，为你精准匹配理想院校与专业，兼顾当下录取与长远发展',
    image: 'https://picsum.photos/id/20/600/400',
    content: [
      { title: '分数/位次精准定位', description: '结合历年录取数据，定位考生分数对应的全省位次区间' },
      { title: 'AI大数据匹配院校', description: '基于考生分数、兴趣、职业倾向，智能匹配"冲稳保"梯度院校' },
      { title: '专业就业前景分析', description: '解析目标专业的行业趋势、就业方向、薪资水平' },
      { title: '志愿表最终审核', description: '资深专家一对一审核志愿表，规避滑档、退档风险' }
    ]
  },
  'career': {
    title: '大学生涯规划服务',
    description: '从入学到毕业，全方位规划大学生活，提升核心竞争力，为未来职业发展奠定坚实基础',
    image: 'https://picsum.photos/id/21/600/400',
    content: [
      { title: '学业规划指导', description: '根据专业特点和个人目标，制定个性化学习计划和选课策略' },
      { title: '能力提升训练', description: '提供沟通、领导力、团队协作等软技能培训和实践机会' },
      { title: '实习就业推荐', description: '对接优质企业资源，提供实习和就业机会推荐' },
      { title: '考研/留学规划', description: '根据个人发展目标，制定考研或留学备考计划和申请策略' }
    ]
  },
  'job': {
    title: '就业/考研/考编服务',
    description: '一站式就业与深造解决方案，助你顺利实现职业目标',
    image: 'https://picsum.photos/id/22/600/400',
    content: [
      { title: '求职技能培训', description: '简历制作、面试技巧、职场礼仪等实用技能培训' },
      { title: '考研全程辅导', description: '考研备考规划、科目辅导、院校选择等全方位支持' },
      { title: '考编指导服务', description: '公务员、事业单位考试备考指导和职位选择建议' },
      { title: '职业发展咨询', description: '基于个人优势和市场需求，提供长期职业发展建议' }
    ]
  },
  'studyabroad': {
    title: '留学咨询服务',
    description: '专业留学规划与申请指导，助你实现海外求学梦想',
    image: 'https://picsum.photos/id/23/600/400',
    content: [
      { title: '留学规划制定', description: '根据个人背景和目标，制定个性化留学规划和院校选择' },
      { title: '申请材料准备', description: '帮助准备和优化申请文书、推荐信等材料' },
      { title: '语言考试辅导', description: '提供托福、雅思等语言考试备考指导和资源' },
      { title: '签证申请指导', description: '协助办理签证、行前准备等相关事宜' }
    ]
  },
  'mental': {
    title: '心理健康咨询服务',
    description: '专业心理疏导和干预，助力青少年心理健康成长',
    image: 'https://picsum.photos/id/24/600/400',
    content: [
      { title: '情绪管理辅导', description: '帮助学生识别和管理情绪，提升心理韧性' },
      { title: '压力应对策略', description: '提供实用的压力管理技巧，应对学习和生活压力' },
      { title: '人际关系指导', description: '改善亲子关系、同伴关系，提升社交能力' },
      { title: '生涯规划心理', description: '结合心理特点，制定更适合个人的发展规划' }
    ]
  }
};

type ServiceKey = keyof typeof serviceData;

export const ServiceDetail: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 获取服务类型
  const getServiceType = () => {
    // 从路径中提取服务类型
    const pathParts = location.pathname.split('/');
    let serviceType = pathParts[pathParts.length - 1].replace('.html', '');
    
    // 如果URL中有id参数，使用id参数
    const urlParams = new URLSearchParams(location.search);
    const id = urlParams.get('id');
    if (id && Object.keys(serviceData).includes(id)) {
      serviceType = id;
    }
    
    return serviceType as ServiceKey;
  };
  
  const serviceType = getServiceType();
  const service = serviceData[serviceType] || serviceData.volunteer;
  
  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="bg-light text-dark min-h-screen">
      <Navbar isScrolled={isScrolled} />
      
      {/* 服务详情头部 */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold text-primary mb-4">{service.title}</h1>
            <p className="text-[clamp(1.1rem,2vw,1.3rem)] text-dark/80 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>
      </section>
      
      {/* 服务详情内容 */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">我们的服务内容</h2>
              <ul className="space-y-4">
                {service.content.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fa fa-check text-secondary mt-1 mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-dark/70">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-20 text-center">
            <button 
              onClick={handleContactClick}
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl inline-block"
            >
              立即咨询
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;