function PopUp({ onClick }) {
    return(
        <div className="w-full h-screen flex justify-center items-center bg-black opacity-25 text-black relative">
            
            <div className="bg-white opacity-100 text-black container mx-auto w-[500px] p-5 rounded-lg space-y-5 absolute z-50">
                <h1 className="text-black font-bold">Modal Heading</h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum omnis hic eum eveniet id, pariatur voluptatibus velit unde quia, commodi saepe repudiandae? Eius odio dolor natus magni harum sequi, possimus a itaque fugit laudantium impedit, 
                </p>

                <button 
                    className="bg-red-600 border-2 border-black text-white p-1 rounded-lg hover:bg-red-800"
                    onClick={onClick}
                >
                    Close
                </button>
            </div>

        </div>
    );
}

export default PopUp;