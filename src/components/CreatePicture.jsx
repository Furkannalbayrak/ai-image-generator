import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const initialGalleryArray = [
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


function CreatePicture() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [galleryImages, setGalleryImages] = useState(initialGalleryArray);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const HUGGINGFACE_API_KEY = import.meta.env.VITE_HUGGINGFACE_API_KEY;

  const genereteImage = async () => {
    if (!prompt || prompt.trim() === "") {
      alert("Lütfen bir prompt giriniz");
      return;
    }

    if (!HUGGINGFACE_API_KEY) {
      setError("Hugging Face API anahtarı bulunamadı. Lütfen .env dosyanızı ve VITE_HUGGINGFACE_API_KEY değişkenini kontrol edin.");
      return;
    }

    setLoading(true);
    setError(null);

    // Aktif Model:
    const API_URL = "https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell";

    // Alternatif Model (Üsttekini yoruma alıp bunu açabilirsiniz):
    //const API_URL = "https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-3-medium-diffusers";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }

      // Cevap doğrudan resim verisi (blob) olarak gelir.
      const imageBlob = await response.blob();
      // Blob'u bir URL'ye çevirerek <img> etiketinde kullanılabilir hale getiriyoruz.
      const imageUrl = URL.createObjectURL(imageBlob);

      // Resmi base64 formatına çevirip LocalStorage'a kaydedelim
      const reader = new FileReader();
      reader.readAsDataURL(imageBlob);
      reader.onloadend = () => {
        const base64data = reader.result;
        try {
          const storedImages = JSON.parse(localStorage.getItem('myGeneratedImages') || '[]');
          // Yeni resmi en başa ekleyelim
          storedImages.unshift({ url: base64data, prompt: prompt, date: new Date().toLocaleString() });
          localStorage.setItem('myGeneratedImages', JSON.stringify(storedImages));
        } catch (e) {
          console.error("LocalStorage kayıt hatası (Depolama alanı dolmuş olabilir):", e);
          alert("Resim oluşturuldu ancak tarayıcı depolama alanı dolduğu için kaydedilemedi. Önceki resimleri silmeyi deneyebilirsiniz.");
        }

        setGalleryImages(prev => [{ url: imageUrl }, ...prev]);
        setPrompt("");
      };

    } catch (error) {
      console.error("Resim oluşturma hatası:", error);
      setError(`Bir hata oluştur ${error.message}. Lütfen tekrar deneyin.`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className='pt-5 w-full'>
        <div className='flex w-full mx-auto gap-10 px-10 justify-between'>
          <div onClick={() => navigate("/")}
            className='text-white w-2/12 text-3xl font-semibold text-center'>
            ArtifyAI
          </div>
          <div className=' w-10/12 flex gap-3'>
            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)}
              className='w-full h-14 px-4 pt-4 pb-4 rounded-2xl bg-gray-700 text-white text-md placeholder:text-gray-400 resize-none focus:outline-none' disabled={loading} placeholder='Hayal gücünü serbest bırak – biz onu çizeriz.'></textarea>

            <button
              onClick={genereteImage}
              disabled={loading}
              className='h-14 px-8 rounded-2xl bg-blue-700 text-white font-semibold hover:bg-blue-900 transition-all text-xl'
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Oluşturuluyor...
                </>
              ) : (
                'Oluştur'
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className='w-10/12 mx-auto mt-2 pl-40'>
            <p className='text-red-400 text-sm'>{error}</p>
          </div>
        )}

        <div className='flex w-full px-10 gap-10 mt-10'>
          <div className='w-2/12'>
            <ul className='flex flex-col gap-1'>
              <li className='text-lg cursor-pointer pl-4 py-2 rounded-full text-white font-semibold bg-transparent hover:bg-gray-600'>Görsel oluştur</li>
              <li onClick={() => navigate("/created-picture")} className='text-lg cursor-pointer pl-4 py-2 rounded-full text-white font-semibold bg-transparent hover:bg-gray-600'>Oluşturduğum resimler</li>
            </ul>
          </div>

          <div className='w-10/12'>
            <div className='columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4'>
              {galleryImages.map((picture, index) => (
                <div
                  key={index}
                  className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-lg"
                  onClick={() => setSelectedImage(picture.url)}
                >

                  <img
                    src={picture.url}
                    alt="AI sanat çalışması"
                    className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Detay</span>
                  </div>
                </div>
              ))}
            </div>

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

export default CreatePicture