export const info = {
  name: "Anuj Jambhale",
  brief_description:
    "I'm a full stack developer with a knack for Game Development.",
  role: "Full Stack Developer",
  picture: "/my_photo.png",
  picture_alt: "Bart Simpson",
  location: "Mumbai, India",
  cv: "/My_Resume.pdf",

  about: {
    description: `I'm Anuj Jambhale, a passionate and driven software developer with a strong foundation in computer science. With a Bachelor’s degree in Computer Science and ongoing Master’s studies, I have honed my skills in programming, web development, and software design.
    In addition to my technical skills, I’m also experienced in game development, video editing, and animation, which allows me to bring a creative edge to my work. I thrive in both team environments and independent projects, constantly eager to learn and adapt to new challenges.
Explore my work, learn more about my journey, and get in touch if you're interested in collaborating or learning more about what I do!`,
    education: [
      {
        title: "Bachelors in Science, Computer Science ",
        date: "2020 - 2023",
        location: "Tilak College of Science and Commerce, Vashi",
        gpa: "9.68 CGPA",
      },
      {
        title: "Masters in Science, Computer Science ",
        date: "2023 - Present",
        location: "SIES College of Arts, Science and Commerce, Nerul",
      },
    ],
    experience: [
      {
        title: "Web Developer Intern",
        date: "Present",
        location: "Rasheed Foundation, Navi Mumbai",
        description: "Crafted interactive web experiences using PHP.",
      },
    ],

    skills: ["JavaScript", "React", "Node.js", "MongoDB", "C#", "PHP"], // not used yet
  },

  projects: [
    {
      title: "Java Point of Sales with Android Barcode Scanner Application",
      date: "2022",
      description:
        "A POS system made with Java for desktop which utilizes the Android Barcode Scanner Application instead of the Physical barcode scanner",
      link: "https://github.com/jambhaleAnuj/java_point_of_sales_3",
      tech: ["Java", "IReport", "Zxing", "Android"],
      img_alt: "Anuj's Portfolio",
      img_path: "/pos.png",
    },
    {
      title: "Music control using hand gesture recognition",
      date: "2023",
      description:
        "this project demonstrates how to combine computer vision, machine learning, and audio functionalities to create an interactive music control system based on hand gestures.",
      link: "https://github.com/jambhaleAnuj/Music-control-with-hand-gesture-recognition",
      tech: ["Python", "Tensorflow", "OpenCV", "pygame"],
      img_alt: "Music control using hand gesture recogntion",
      img_path: "hand_recognition.png",
    },
    {
      title: "Ping Pong Game made using Unity game engine",
      date: "2022",
      description:
        "This ping pong game is made in Unity game engine. This game has 2 modes: Single Player and Multiplayer",
      link: "https://github.com/bartsimpsonfake/comic-club",
      tech: ["Unity Engine", "C#"],
      img_alt: "Ping pong ",
      img_path: "ping_pong.png",
    },
  ],

  contact: {
    email: "jambhaleanuj@gmail.com",
    linkedin: "https://www.linkedin.com/in/anuj-jambhale-856689245/",
    github: "https://www.github.com/jambhaleAnuj",
    twitter: "https://twitter.com/anujjambhale",
  },
};
