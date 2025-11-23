// Diagonal Split Layout
import {TextGenerateEffect} from "@/components/ui/TextGenerateEffect";

export default function ContactMe() {
    return (
        <div className="bg-[#000319] py-12 px-4 -my-20 md:px-6">
            <div className="lg:w-[1100px] mx-auto relative h-[550px] bg-[#272A3C]/30 border border-[rgba(105,113,162,0.16)] rounded-[23px] overflow-hidden ">
                <div className="absolute inset-0 grid md:grid-cols-2 ">
                    <div className="hidden md:block relative overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/src/ContactImage.jpg"
                            alt="Contact"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex items-center justify-center p-6 ">
                        <div className="w-full max-w-md">

                            <TextGenerateEffect
                                words="Contact Me"
                                className=" text-[24px] md:text-2xl lg:text-4xl mb-5 mt-0 pt-0"
                            />
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-4 py-3 bg-[#000319]/50 border border-[rgba(105,113,162,0.16)] rounded-[12px] text-white placeholder-[#6971A2] focus:border-[#6971A2] outline-none transition-colors"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="w-full px-4 py-3 bg-[#000319]/50 border border-[rgba(105,113,162,0.16)] rounded-[12px] text-white placeholder-[#6971A2] focus:border-[#6971A2] outline-none transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 bg-[#000319]/50 border border-[rgba(105,113,162,0.16)] rounded-[12px] text-white placeholder-[#6971A2] focus:border-[#6971A2] outline-none transition-colors"
                                />
                                <textarea
                                    placeholder="Message"
                                    rows={3}
                                    className="w-full px-4 py-3 bg-[#000319]/50 border border-[rgba(105,113,162,0.16)] rounded-[12px] text-white placeholder-[#6971A2] focus:border-[#6971A2] outline-none transition-colors resize-none"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-white text-[#000319] py-3 rounded-[12px] hover:bg-gray-100 transition-colors"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
