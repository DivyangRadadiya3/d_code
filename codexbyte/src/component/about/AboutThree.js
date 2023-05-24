import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Datas = [
    {
        id: 1,
        title: "Progressive Roadmap",
        para: "Our team of developers creates a progressive roadmap that includes a strategic plan to define a goal and major steps to reach that goal. We have a team of developers that uses progressive roadmap tools like Jira, Trello, and GitHub to update the roadmap within minutes."
    },
    {
        id: 2,
        title: "Efficient Project Management",
        para: "We believe in efficient project management and our experienced developers use project management tools like Wrike and Zoho. Our developers use these project management tools efficiently to plan a project and deliver it on time."
    },
    {
        id: 3,
        title: "Flexible Engagement Model",
        para: "We provide flexible engagement models so that clients can hire developers for their projects. These engagement models are flexible so if you aren’t satisfied with any model you can switch to another."
    },
    {
        id: 4,
        title: "Cost-Effective",
        para: "Our team of developers provides the best development services at affordable prices. We believe that high-quality solutions can be delivered at cost-effective prices and that’s why we provide different hiring models."
    },
    {
        id: 5,
        title: "Consistent Delivery",
        para: "Our developers follow an agile approach to deliver the project before the deadline. We are providing consistent delivery of fully-featured projects as per the client’s requirements."
    }
]




const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="Our Valus"
                    title="Why Choose Codexbyte?"
                    description="We have a team of developers who use their expertise to provide complete web development, mobile app development, testing & assurance, SaaS development, and designing services. Codexbyte Infotech has a team of developers that you can hire by mentioning the requirements for your project. Save time and money by hiring our developers for your startup or large-scale company. Our team of developers has the experience to understand the business ideas of the clients to provide solutions that focus on the core values of the business. Here you will find some benefits of hiring developers from us."
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
            </ul>
        </div>
    )
}

export default AboutThree;