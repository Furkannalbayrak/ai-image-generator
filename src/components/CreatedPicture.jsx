import React, { useState, useEffect } from 'react'
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function CreatedPicture() {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            const stored = JSON.parse(localStorage.getItem('myGeneratedImages') || '[]');
            setGalleryImages(stored);
        } catch (e) {
            console.error("Resimler yüklenirken hata oluştu:", e);
        }
    }, []);

    return (
        <div>
            <div className='pt-5 w-full'>
                <div className='flex w-full mx-auto gap-10 px-10 justify-between'>
                    <div onClick={() => navigate("/")}
                        className='text-white w-2/12 text-3xl font-semibold text-center'>
                        ArtifyAI
                    </div>
                </div>

                {error && (
                    <div className='w-10/12 mx-auto mt-2 pl-40'>
                        <p className='text-red-400 text-sm'>{error}</p>
                    </div>
                )}

                <div className='flex w-full px-10 gap-10 mt-10'>
                    <div className='w-2/12 mt-5'>
                        <ul className='flex flex-col gap-1'>
                            <li onClick={() => navigate("/create-picture")} className='text-lg cursor-pointer pl-4 py-2 rounded-full text-white font-semibold bg-transparent hover:bg-gray-600'>Görsel oluştur</li>
                            <li onClick={() => navigate("/created-picture")} className='text-lg cursor-pointer pl-4 py-2 rounded-full text-white font-semibold bg-transparent hover:bg-gray-600'>Oluşturduğum resimler</li>
                        </ul>
                    </div>

                    <div className='w-10/12'>
                        {galleryImages.length === 0 ? (
                            <div className='flex flex-col items-center justify-center pt-20'>
                                <p className='text-gray-400 text-xl'>Henüz kaydettiğiniz bir resim bulunmuyor.</p>
                                <button onClick={() => navigate("/create-picture")} className='mt-5 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'>Şimdi Oluştur</button>
                            </div>
                        ) : (
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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