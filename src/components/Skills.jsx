import html from '../images/html.png';
import css from '../images/CSS.png';
import javascript from '../images/javascript.png';
import c from '../images/C.png';
import sql from '../images/sql.png';
import figma from '../images/figma.png';
import photoshop from '../images/photoshop.png';
import illustrator from '../images/illustrator.png';
import premiere from '../images/premiere.png';
import github from '../images/github.png';
import office from '../images/office.png';
import java from '../images/java.png';
import react from '../images/react.png';

const Skills = () => {
  const skills = [
    { name: "HTML", level: "Intermediate", icon: html },
    { name: "CSS", level: "Intermediate", icon: css },
    { name: "JavaScript", level: "Intermediate", icon: javascript },
    { name: "C", level: "Intermediate", icon: c },
    { name: "SQL", level: "Intermediate", icon: sql },
    { name: "Figma", level: "Advanced", icon: figma },
    { name: "Photoshop", level: "Advanced", icon: photoshop },
    { name: "Illustrator", level: "Basic", icon: illustrator },
    { name: "Premiere", level: "Advanced", icon: premiere },
    { name: "GitHub", level: "Intermediate", icon: github },
    { name: "Office", level: "Advanced", icon: office },
    { name: "Java", level: "Basic", icon: java },
    { name: "React", level: "Intermediate", icon: react},
  ]

  return (
    <section id="skills" className="py-22.5">
      <div className="mx-4 md:mx-19.25">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primaryText mb-16">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover-lift hover:border-accentGreen/30 transition-all duration-300"
              >
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
                <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
            </div>

            <h3 className="font-semibold text-primaryText mb-2">{skill.name}</h3>

             <p className="text-sm text-primaryText/60">{skill.level}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills