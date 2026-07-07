import React, { useState, useEffect } from 'react'
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function CreatedPicture() {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        try {
            const stored = JSON.parse(localStorage.getItem('myGeneratedImages') || '[]');
            setGalleryImages(stored);
        } catch (e) {
            console.error("Resimler yüklenirken hata oluştu:", e);
        }
    }, []);

    return (
        <div className='min-h-screen bg-gray-950 pb-12'>
            {/* Üst Kısım: Logo */}
            <div className='w-full max-w-7xl mx-auto pt-8 px-6 md:px-10'>
                <div className='flex flex-col md:flex-row items-center gap-6 justify-between'>
                    {/* Logo */}
                    <div onClick={() => navigate("/")}
                        className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 w-full md:w-auto text-4xl font-extrabold text-center md:text-left cursor-pointer tracking-tight'>
                        ArtifyAI
                    </div>
                </div>

                {/* Hata Mesajı */}
                {error && (
                    <div className='w-full mt-4 flex justify-center md:justify-start md:pl-[200px]'>
                        <p className='text-red-400 text-sm bg-red-900/20 py-2 px-4 rounded-lg inline-block border border-red-800/50'>{error}</p>
                    </div>
                )}
            </div>

            {/* Alt Kısım: Sol Menü + Galeri */}
            <div className='flex flex-col md:flex-row w-full max-w-7xl mx-auto px-6 md:px-10 gap-8 mt-12'>

                {/* Sol Menü */}
                <div className='w-full md:w-48 shrink-0'>
                    <ul className='flex flex-wrap md:flex-col gap-3 pb-4 md:pb-0'>
                        <li onClick={() => navigate("/create-picture")} className='flex-1 min-w-[180px] text-md cursor-pointer px-5 py-3.5 rounded-2xl text-gray-300 font-medium bg-gray-800/40 border border-gray-700/50 hover:bg-gray-700/60 hover:text-white transition-all flex items-center justify-center md:justify-start gap-3'>
                            <svg className="w-6 h-6 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className='whitespace-nowrap'>Görsel oluştur</span>
                        </li>
                        <li className='flex-1 min-w-[180px] text-md cursor-pointer px-5 py-3.5 rounded-2xl text-white font-semibold bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/30 transition-all flex items-center justify-center md:justify-start gap-3'>
                            <svg className="w-6 h-6 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <span className='whitespace-nowrap'>Galerim</span>
                        </li>
                    </ul>
                </div>

                {/* Galeri */}
                <div className='flex-1'>
                    {galleryImages.length === 0 ? (
                        <div className='flex flex-col items-center justify-center pt-20'>
                            <p className='text-gray-400 text-xl'>Henüz kaydettiğiniz bir resim bulunmuyor.</p>
                            <button onClick={() => navigate("/create-picture")} className='mt-5 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'>Şimdi Oluştur</button>
                        </div>
                    ) : (
                        <div className='columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4'>
                            {galleryImages.map((picture, index) => (
                                <div
                                    key={index}
                                    className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-lg"
                                    onClick={() => setSelectedImage(picture.url)}
                                >
                                    <img
                                        src={picture.url}
                                        alt={picture.prompt || "AI sanat çalışması"}
                                        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-4 px-2">
                                        <p className="text-gray-300 text-xs text-center line-clamp-3 mb-2">{picture.prompt}</p>
                                        <span className="text-white text-lg font-semibold">Büyüt</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {selectedImage && (
                <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50' onClick={() => setSelectedImage(null)}>
                    <div className='max-w-3xl p-4 bg-gray-900 rounded-xl shadow-lg relative' onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage}
                            alt="Büyük Görsel"
                            className='rounded-lg max-h-[80vh] w-full object-contain'
                        />

                        <button onClick={() => setSelectedImage(null)} className='absolute top-2 -right-40 text-gray-300 text-3xl hover:text-red-400 transition-colors'>
                            <IoMdClose />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CreatedPicture