import { useState } from "react"
import images from "./images"
function App() {
    const [selectedImage, setselectedImage] = useState(images[0])
    return (
        <div className="flex flex-col min-h-screen justify-around bg-gray-900 ">
            <div className="flex justify-center items-center mt-5">
                <img src={selectedImage} alt="selected"
                className="border-[10px] border-yellow-500 h-[500px] w-auto md:min-w-[500px] "
                 />
            </div>
            <div className=" flex flex-wrap md:flex-nowrap justify-center mb-5" >
                {images.map((image,id) =>
                    <img  key={id} src={image}
                        onClick={()=>setselectedImage(image)}
                        className="m-2 sm:m-3 h-32 w-32 md:h-40 md:w-44 border-2 border-white"
                    />
                )}
            </div>
        </div>
    )
}

export default App
