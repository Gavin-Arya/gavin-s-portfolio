import avatar from '../images/avatar.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="mx-4 md:mx-19.25 text-center section-reveal">
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={avatar} alt="Avatar" className="w-full h-full object-cover" />
          <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        <h2 className="text-lg md:text-xl text-primaryText mb-4">Hi, I'm Gavin!</h2>

        <h1 className="text-4xl md:text-6xl font-bold text-primaryText mb-6 leading-tight">
          Building beautiful
          <br />
          interfaces & reliable
          <br />
          front-ends.
        </h1>

        <p className="text-sm md:text-base text-primaryText/80 mb-8 max-w-2xl mx-auto">
          UI/UX Designer • Front-End Developer • Undergraduate Software Engineering
        </p>

        <button 
          onClick={() => window.open("https://linktr.ee/gavinarya", "_blank")}
          className="bg-primaryText text-white px-8 py-3 rounded-full font-medium hover:bg-accentGreen hover:scale-105 transition-all duration-300">
          Let's Connect!
        </button>
      </div>
    </section>
  )
}

export default Hero