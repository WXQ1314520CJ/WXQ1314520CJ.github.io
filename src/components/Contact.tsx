import React, { useState } from 'react';
import { toast } from 'sonner';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 简单的表单验证
    if (!formData.name || !formData.phone || !formData.service || !formData.message) {
      toast.error('请填写完整的咨询信息');
      return;
    }
    
    // 模拟表单提交
    toast.success('咨询信息已提交，我们会尽快与您联系');
    
    // 重置表单
    setFormData({
      name: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-primary mb-4">联系我们</h2>
              <div className="w-20 h-1 bg-secondary mb-8 rounded-full"></div>
              <p className="text-dark/70 mb-8">
                无论您有任何疑问或需求，都可以通过以下方式联系我们，我们将竭诚为您服务。
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <i className="fa fa-phone text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">咨询电话</h4>
                    <a href="tel:17795803368" className="text-dark/70 hover:text-primary transition-colors">17795803368</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <i className="fa fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">电子邮箱</h4>
                    <a href="mailto:contact@wanbangxinyue.com" className="text-dark/70 hover:text-primary transition-colors">contact@wanbangxinyue.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <i className="fa fa-map-marker text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">公司地址</h4>
                    <p className="text-dark/70">陕西省西安市雁塔区科技路西段</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-lg mb-4">关注我们</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-primary/10 hover:bg-primary text-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <i className="fa fa-weixin"></i>
                  </a>
                  <a href="#" className="bg-primary/10 hover:bg-primary text-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <i className="fa fa-weibo"></i>
                  </a>
                  <a href="#" className="bg-primary/10 hover:bg-primary text-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <i className="fa fa-qq"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-dark mb-6">在线咨询</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-dark/70 mb-2">姓名</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" 
                    placeholder="请输入您的姓名"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-dark/70 mb-2">电话</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" 
                    placeholder="请输入您的电话"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-dark/70 mb-2">咨询服务</label>
                  <select 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  >
                    <option value="">请选择咨询服务类型</option>
                    <option value="volunteer">志愿填报规划</option>
                    <option value="career">职业发展规划</option>
                    <option value="study">升学规划</option>
                    <option value="overseas">留学咨询</option>
                    <option value="mental">心理健康咨询</option>
                    <option value="other">其他服务</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-dark/70 mb-2">咨询内容</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors" 
                    placeholder="请简要描述您的咨询内容"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  提交咨询
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}