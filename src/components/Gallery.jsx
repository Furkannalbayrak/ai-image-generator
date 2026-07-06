import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";


function Gallery() {

    const [selectedImage, setSelectedImage] = useState(null);

    const galleryArray = [
        {
            url: "https://readdy.ai/api/search-image?query=futuristic%20cityscape%20with%20neon%20lights%20and%20flying%20vehicles%2C%20cyberpunk%20style%2C%20digital%20art%2C%20high%20detail%2C%20dramatic%20lighting%2C%20purple%20and%20blue%20color%20scheme&width=600&height=400&seq=gallery01&orientation=landscape"
        },

        {
            url: "https://readdy.ai/api/search-image?query=ethereal%20portrait%20of%20a%20woman%20with%20flowing%20hair%20made%20of%20cosmic%20dust%20and%20stars%2C%20fantasy%20digital%20art%2C%20dreamy%20atmosphere%2C%20high%20detail%2C%20cosmic%20theme%20with%20purple%20and%20teal%20colors&width=400&height=600&seq=gallery02&orientation=portrait"
        },
        {
            url: "https://readdy.ai/api/search-image?query=surreal%20floating%20islands%20with%20waterfalls%20in%20the%20sky%2C%20fantasy%20landscape%2C%20magical%20atmosphere%2C%20detailed%20environment%2C%20vibrant%20colors%2C%20dreamlike%20scene&width=600&height=400&seq=gallery03&orientation=landscape"
        },
        {
            url: "https://readdy.ai/api/search-image?query=abstract%20digital%20art%20with%20flowing%20liquid%20colors%2C%20vibrant%20neon%20colors%20against%20dark%20background%2C%20high%20resolution%2C%20modern%20digital%20art%20style&width=500&height=500&seq=gallery04&orientation=squarish"
        },
        {
            url: "https://readdy.ai/api/search-image?query=mystical%20forest%20with%20glowing%20plants%20and%20magical%20creatures%2C%20fantasy%20environment%2C%20ethereal%20atmosphere%2C%20detailed%20vegetation%2C%20bioluminescent%20elements%2C%20enchanted%20forest&width=600&height=400&seq=gallery05&orientation=landscape"
        },
        {
            url: "https://readdy.ai/api/search-image?query=futuristic%20robot%20with%20human-like%20features%20in%20a%20contemplative%20pose%2C%20sci-fi%20portrait%2C%20detailed%20mechanical%20parts%20with%20glowing%20elements%2C%20dramatic%20lighting%2C%20cyberpunk%20aesthetic&width=400&height=600&seq=gallery06&orientation=portrait"
        },



        {
            url: "https://cdn.pixabay.com/photo/2024/07/23/03/03/ai-generated-8913942_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/11/29/22/05/ai-8420360_1280.jpg"
        },

        {
            url: "https://cdn.pixabay.com/photo/2024/06/22/02/02/wolf-8845341_1280.png"
        },
        {
            url: "https://cdn.pixabay.com/photo/2024/04/14/11/17/ai-8695228_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2022/09/04/10/25/owl-7431340_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2022/11/18/18/04/panther-7600667_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2024/09/10/17/06/ai-9037629_1280.png"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/02/23/17/56/ai-generated-7809350_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/01/26/22/10/ai-generated-7747113_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2024/02/17/07/09/ai-generated-8578826_1280.png"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/03/14/00/21/skull-7851197_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/08/28/07/29/jet-8218519_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/10/26/08/13/elephant-8342051_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2024/07/23/03/03/ai-generated-8913943_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/07/13/06/36/ai-generated-8124007_1280.png"
        },
        {
            url: "https://cdn.pixabay.com/photo/2022/09/04/09/46/tree-7431264_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2022/09/01/08/55/gate-7425036_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/11/16/09/02/magic-8391947_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2024/01/20/14/36/ai-generated-8521221_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/05/13/15/38/fairytale-7990761_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2024/02/07/15/44/ai-generated-8559352_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/12/15/01/23/ai-generated-8449876_1280.png"
        },
        {
            url: "https://cdn.pixabay.com/photo/2024/07/07/16/08/ai-generated-8879231_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2024/01/20/00/43/ai-generated-8520113_1280.png"
        },
        {
            url: "https://cdn.pixabay.com/photo/2024/04/04/14/42/ai-generated-8675208_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/11/10/10/27/ginger-8379102_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/10/09/11/05/city-street-8303876_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2024/07/10/12/41/ai-generated-8885797_1280.png"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/01/29/01/50/ai-generated-7752142_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/04/10/09/02/skull-7913208_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/10/09/08/45/ai-generated-8303646_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/01/21/15/15/ai-generated-7734318_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2024/02/22/02/21/ai-generated-8588974_1280.png"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/12/07/18/24/photoshop-8436089_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2024/04/13/01/11/ai-generated-8692946_1280.jpg"
        },
        {
            url: "https://cdn.pixabay.com/photo/2024/05/14/18/21/woman-8761915_1280.png"
        },
        {
            url: "https://cdn.pixabay.com/photo/2024/06/13/16/43/woman-8827982_1280.png"
        },
        {
            url: "https://cdn.pixabay.com/photo/2023/10/10/11/11/ai-generated-8306197_1280.png"
        },
    ]

    return (
        <div className="min-h-screen" id='gallery'>
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-2">Galeri</h1>
                    <p className="text-gray-400 text-lg">Artify AI ile Oluşturulmuş Sanat Çalışmaları</p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 ">
                    {galleryArray.map((picture, index) => (
                        <div
                            key={index}
                            className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                            onClick={() => setSelectedImage(picture.url)}
                        >

                            <img
                                src={picture.url}
                                alt="AI sanat çalışması"
                                className="w-full h-auto object-cover"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-lg font-semibold">Detay</span>
                            </div>
                        </div>
                    ))}
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

export default Gallery