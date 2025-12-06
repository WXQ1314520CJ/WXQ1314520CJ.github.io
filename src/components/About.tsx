import React from "react";

export const About: React.FC = () => {
    return (
        <section id="about" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto mb-12 text-center">
                    <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-primary mb-4">关于西安万邦心悦文化产业有限公司</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
                    <p className="text-dark/70 text-lg">依托资深专家团队与AI大数据的前瞻研判，为万千家庭与学子锚定成长航向
                                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="fade-in">
                        <h3 className="text-xl md:text-2xl font-bold text-dark mb-4">成立背景</h3>
                        <p className="text-dark/80 mb-6 leading-relaxed">西安万邦心悦文化产业有限公司，锚定国家优质人才战略需求，立足陕西、辐射西北，启幕教育咨询领域的专业化新征程。我们融合传统教育智慧与现代科技力量，致力于打造西北领先的教育咨询服务平台。
                                        </p>
                        <h3 className="text-xl md:text-2xl font-bold text-dark mb-4">企业使命</h3>
                        <p className="text-dark/80 leading-relaxed">公司以"赋能国之栋梁，筑梦理想学府"为使命，融资深专家经验与AI智能赋能于现代教育服务，凭专业咨询方案，助力万千家庭与学子锚定成长航向，达成学业与发展的双重价值目标。
                                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-xl p-8 fade-in">
                        <h3 className="text-xl md:text-2xl font-bold text-dark mb-4">专业服务</h3>
                        <div className="flex items-start mb-6">
                            <div className="bg-primary/10 p-3 rounded-lg mr-4">
                                <i className="fa fa-briefcase text-primary text-2xl"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">职业与深造发展类</h4>
                                <p className="text-dark/70">大学生涯规划、就业指导与推荐、考研全程规划、考编指导服务、留学申请全流程</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start mb-6">
                            <div className="bg-primary/10 p-3 rounded-lg mr-4">
                                <i className="fa fa-graduation-cap text-primary text-2xl"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">升学与志愿规划类</h4>
                                <p className="text-dark/70">高中学科精选指导、高考志愿填报规划、院校专业精准匹配、历年数据深度分析、大学成长方向锚定</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="bg-primary/10 p-3 rounded-lg mr-4">
                                <i className="fa fa-heart text-primary text-2xl"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">成长与素养赋能类</h4>
                                <p className="text-dark/70">家庭教育指导服务、青少年心理疗愈、家校协同育人方案、心理健康素养提升、综合能力全面发展</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};