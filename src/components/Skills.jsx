const Skills = () => {
  const skills = [
    { name: "HTML", level: "Intermediate", icon: "/public/html.png" },
    { name: "CSS", level: "Intermediate", icon: "/public/CSS.png" },
    { name: "JavaScript", level: "Intermediate", icon: "/public/Javascript.png" },
    { name: "C", level: "Intermediate", icon: "/public/C.png" },
    { name: "SQL", level: "Intermediate", icon: "/public/sql.png" },
    { name: "Figma", level: "Advanced", icon: "/public/figma.png" },
    { name: "Photoshop", level: "Advanced", icon: "/public/photoshop.png" },
    { name: "Illustrator", level: "Basic", icon: "/public/illustrator.png" },
    { name: "Premiere", level: "Advanced", icon: "/public/premiere.png" },
    { name: "GitHub", level: "Intermediate", icon: "/public/github.png" },
    { name: "Office", level: "Advanced", icon: "/public/office.png" },
    { name: "Java", level: "Basic", icon: "/public/java.png" },
    { name: "React", level: "Intermediate", icon: "/public/react.png" },
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