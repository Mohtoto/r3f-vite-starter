const Section = (props) => {
  const { children } = props;

  return <section className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>{children}</section>;
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
     <AboutSection />

      <Section>
        <h1>Skills</h1>
      </Section>
      <Section>
        <h1>Projects</h1>
      </Section>
      <Section>
        <h1>Contact</h1>
      </Section>
    </div>
  );
};

const AboutSection = () =>{
return (



    <Section>

        <h1 className="text-6xl font-extrabold leading-snug">
            Hi , I'm

            <span className="bg-white px-1 italic">Mohammad Totonchy</span>
        </h1>

        <p className="text-lg text-gray-600 mt-4">
            I am a fullstack software Engineer working currently at Versent
            <br/>

            learn how to build 3D apps
        </p>

        <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16">
        Contact me
        </button>
    </Section>

)
}