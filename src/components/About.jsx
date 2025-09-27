import photo from '../images/About Photo.jpg';

const About = () => {
  return (
    <section id="about" className="py-22.5">
      <div className="mx-4 md:mx-19.25">
        <div className="grid md:grid-cols-2 gap-12 items-center section-reveal">
          <div className="order-2 md:order-1">
            <div className="w-full h-90 bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src={photo} alt="Gavin" className="w-full h-full object-cover"/>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-primaryText mb-6">I'm Gavin Arya Wibowo.</h2>
            <p className="text-primaryText/80 mb-6 leading-relaxed">
              What drives me as a student of Software Engineering is the intersection of design and code. I believe the best solutions are built with a deep understanding
              of people's needs, and I'm dedicated to crafting user experiences that are not just visually appealing, but also incredibly useful and reliable.
            </p>

            <a 
              href= "/public/Gavin-Arya-Wibowo-CV.pdf"
              download
              className="bg-primaryText text-white px-6 py-3 rounded-full font-medium hover:bg-accentGreen hover:scale-105 transition-all duration-300">
              View My CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About