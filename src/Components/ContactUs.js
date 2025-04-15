const ContactUs = () => {
    return (
        <div className="flex justify-center h-[88vh] items-center bg-gray-100">
            <div className="w-60% flex flex-col">
                <h1 className="text-center font-bold text-3xl">Get In Touch</h1>
                <form className="flex-[1]">
                    <input
                    className="p-2 border border-black my-2 w-[80%] mx-[10%]" 
                    type="text" placeholder="Name" />
                    <input
                    className="p-2 border border-black my-2 w-[80%] mx-[10%]" 
                    type="text" placeholder="Email" />
                    <input
                    className="p-2 border border-black my-2 w-[80%] mx-[10%] h-20" 
                    type="text" placeholder="Tell us about your requirements" />
                    <button className="w-[30%] p-2 text-white mx-[30%] cursor-pointer rounded-xl bg-green-400 hover:bg-black">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default ContactUs;