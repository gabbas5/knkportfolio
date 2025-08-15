 const kza= {
    title: "About KZA (SMC-Pvt) Ltd",
    image:
      "https://framerusercontent.com/images/z1n8PeIlVA2Z7zW4lIbrWJFz9Xk.jpg",
    content: `KZ Associates is a leading engineering consultancy firm specializing in MEP (Mechanical, Electrical, and Plumbing) solutions for the commercial, residential, and industrial sectors. Since its establishment in 2020, we have been committed to delivering sustainable, innovative, and cost-effective engineering designs and project management services. From high-rise buildings to healthcare facilities, our extensive expertise ensures precision, efficiency, and excellence in every project.`,
    subheadings: {
      "Our Mission":
        "To provide the best consultancy and project management services in the MEP sector by delivering quality, timely, and value-added engineering solutions tailored to our clients' technical and financial needs.",
      "Our Vision":
        "To be recognized as a benchmark for engineering consultancy, offering unparalleled expertise and sustainable solutions in MEP design, project management, and supervision.",
    },
    services: {
      heading: "Our Services",
      description:
        "KZ Associates is your trusted partner for transformative engineering solutions, setting industry standards and driving success through excellence.",
      list: [
        {
          title: "Project Management Services",
          description:
            "Overseeing projects with precision, ensuring timely execution, and budget control.",
          icon: "1",
        },
        {
          title: "MEP Design Services",
          description:
            "Comprehensive HVAC, fire protection, plumbing, and electrical system designs.",
          icon: "2",
        },
        {
          title: "Supervision & Quality Assurance",
          description:
            "Maintaining the highest standards of safety, functionality, and sustainability.",
          icon: "3",
        },
        {
          title: "Innovation & Sustainability",
          description:
            "Crafting solutions that meet the newest industry trends and environmental standards.",
          icon: "4",
        },
      ],
    }
  }
const About = () => {
  return (
    <div>{kza.title}</div>
  )
}

export default About;