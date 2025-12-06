import React from "react";

export const Hero: React.FC = () => {
    const handleContactClick = () => {
        const element = document.getElementById("contact");

        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    };

    const handleServicesClick = () => {
        const element = document.getElementById("services");

        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    };

    return (
        <section
            className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-primary/5 to-primary/10 bg-cover bg-center bg-no-repeat relative overflow-hidden"
            style={{
                backgroundImage: "url('/images/hero-bg.png')"
            }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center fade-in">
                    <h1
                        className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-primary mb-6 leading-tight text-shadow relative z-10"
                        style={{
                            fontFamily: "\"Noto Serif SC\", serif",
                            backgroundColor: "#FFFFFF",
                            fontWeight: "bold"
                        }}>从志愿到生涯，从规划到落地
                                  </h1>
                    <p
                        className="text-[clamp(1.1rem,2vw,1.3rem)] text-dark/80 mb-8 leading-relaxed relative z-10"
                        style={{
                            color: "#0A0A0A",
                            fontFamily: "\"Noto Sans SC\", sans-serif",
                            fontWeight: "normal",
                            fontSize: "24px"
                        }}>万邦心悦——你的成长全周期护航者，赋能国之栋梁，筑梦理想学府
                                  </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        <button
                            onClick={handleContactClick}
                            className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl"
                            style={{
                                fontSize: "24px"
                            }}>立即咨询
                                        </button>
                        <button
                            onClick={handleServicesClick}
                            className="bg-white hover:bg-gray-50 text-primary border border-primary font-medium py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg"
                            style={{
                                fontSize: "24px"
                            }}>了解服务
                                        </button>
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        </section>
    );
};