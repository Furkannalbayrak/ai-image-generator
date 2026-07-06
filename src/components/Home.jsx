import React from 'react'
import '../css/home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div className='min-h-screen'>
            {/* Hero Section */}
            <div className='container mx-auto px-4 py-20 text-white'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h1 className='text-5xl font-bold mb-6'>Hayal Et, Biz Yaratalım</h1>
                    <p className='text-xl mb-8'>Görüntü AI teknolojisini kullanarak hayallerinizi gerçekçi resimlere dönüştürün. Tek ihtiyacınız bir prompt!</p>
                    
                    {/* Features Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
                        <div className='p-6 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(96,165,250,0.5)] transition-all duration-200 bg-gradient-to-r from-blue-700 via-purple-400 to-blue-700 animate-gradient-x linear'>
                            <h3 className='text-2xl font-semibold mb-3'>AI Güçlü</h3>
                            <p>En gelişmiş AI algoritmalarıyla gerçekçi sonuçlar</p>
                        </div>
                        <div className='p-6 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(96,165,250,0.5)] transition-all duration-200 bg-gradient-to-r from-blue-700 via-purple-400 to-blue-700 animate-gradient-x linear'>
                            <h3 className='text-2xl font-semibold mb-3'>Kolay Kullanım</h3>
                            <p>Basit ve kullanıcı dostu arayüzle hızlı sonuçlar</p>
                        </div>
                        <div className='p-6 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(96,165,250,0.5)] transition-all duration-200 bg-gradient-to-r from-blue-700 via-purple-400 to-blue-700 animate-gradient-x linear'>
                            <h3 className='text-2xl font-semibold mb-3'>Limit Sınırsız</h3>
                            <p>Kaç isterseniz o kadar resim oluşturun</p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className='mt-12'>
                        <button onClick={()=> navigate("/create-picture")} 
                        className='bg-blue-700 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-[0_0_100px_rgba(96,165,250,0.5)] '>
                            Hadi Başlayalım
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home