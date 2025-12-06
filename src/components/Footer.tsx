import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">万邦心悦</h3>
            <p className="text-gray-400 mb-6">
              从志愿到生涯，从规划到落地，你的成长全周期护航者
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa fa-weixin"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa fa-weibo"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa fa-qq"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">服务项目</h4>
            <ul className="space-y-2">
              <li><a href="service-volunteer.html" className="text-gray-400 hover:text-white transition-colors">志愿填报规划</a></li>
              <li><a href="service-career.html" className="text-gray-400 hover:text-white transition-colors">大学生涯规划</a></li>
              <li><a href="service-job.html" className="text-gray-400 hover:text-white transition-colors">就业/考研/考编</a></li>
              <li><a href="service-studyabroad.html" className="text-gray-400 hover:text-white transition-colors">留学咨询服务</a></li>
              <li><a href="service-mental.html" className="text-gray-400 hover:text-white transition-colors">心理健康咨询</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">关于我们</h4>
            <ul className="space-y-2">
              <li><a href="index.html#about" className="text-gray-400 hover:text-white transition-colors">企业简介</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">师资团队</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">成功案例</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">新闻动态</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">联系方式</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa fa-phone text-gray-400 mt-1 mr-3"></i>
                <span className="text-gray-400">17795803368</span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-envelope text-gray-400 mt-1 mr-3"></i>
                <span className="text-gray-400">contact@wanbangxinyue.com</span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-map-marker text-gray-400 mt-1 mr-3"></i>
                <span className="text-gray-400">陕西省西安市雁塔区科技路西段</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 西安万邦心悦文化产业有限公司 版权所有 | 陕ICP备XXXXXXXX号</p>
        </div>
      </div>
    </footer>
  );
}