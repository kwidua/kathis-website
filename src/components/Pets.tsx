import ProfileImage from "../ui/RoundImage"
import Siggi from "./../assets/Siggi.jpeg"
import Lissi from "./../assets/Lissi.jpeg"
import MK from "./../assets/M&K.jpeg"

export default function Pets() {
    return (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div
                key={1}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={Siggi}
                  alt="grey cat"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-baseline-last mb-4 text-4xl text-white font-semibold">Siggi</div>
              </div>
        
              <div
                key={2}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={Lissi}
                  alt="black cat"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-baseline-last mb-4 text-4xl text-white font-semibold">Lissi</div>
              </div>

              <div
                key={3}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={MK}
                  alt="two turtles"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-baseline-last mb-4 text-3xl text-white font-semibold">Momo & Kassiopeia</div>
              </div>
            </div>
        </>
    )
}