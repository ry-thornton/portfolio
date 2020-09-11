import React from 'react'

function Resume(){
    return (
        <>
            <div id="resume" className="content container pt-3">
                <h1>Resume</h1>
                <br/>
                <h4>Professional Experience</h4>
                <div>
                    {/* Job Title and company */}
                    <span className="Job-title">Software Engineer</span>,
                    <a href="https://goffeeshop.com" target="_blank" className="Job-company"> GOffee</a>
                </div>
                <div>
                    {/* Job dates and location */}
                    <p>February 2020 - Present | New York, NY</p>
                    <ul>
                        <li>
                            Lead the development of GOffee’s web app and ordering platform
                            from conception to a production grade app using both frontend and backend
                            technologies (React/Javascript, HTML, CSS, Firebase, Bulma)
                        </li>
                        <li>
                            Research and implement various third party APIs that improve app functionality 
                            and overall user experience (Stripe Payments, Mapbox)
                        </li>
                        <li>
                            Collaborate with off-shore mobile development team, 
                            professional design lead, and all departments at GOffee to build a cross-platform product
                            with customer and employee facing features that are functional, efficiently, and responsive
                        </li>
                    </ul>
                </div>
                <br/>
                <div>
                    {/* Job Title and company */}
                    <span className="Job-title">Research Assistant</span>,
                    <a href="https://kesslerfoundation.org" target="_blank" className="Job-company"> Kessler Foundation</a>
                </div>
                <div>
                    {/* Job dates and location */}
                    <p>January 2018 - February 2019 | East Hanover, NJ</p>
                    <ul>
                        <li>
                            Administer experimental interventions to MS and TBI
                            populations as part of research studies examining emotional processing
                        </li>
                        <li>
                            Work with principal investigators to develop solutions for issues that
                            may arise during research that may affect the validity or the ability to generalize study results
                        </li>
                    </ul>
                </div>
                <br/>
                <br/>
                <h4>Education</h4>
                <div>
                    {/* Job Title and company */}
                    <span className="Job-title">Flatiron School</span>, Software Engineering
                </div>
                <div>
                    {/* Job dates and location */}
                    <p>August 2019 - December 2019 | New York, NY</p>
                    <ul>
                        <li>
                            Graduate of Software Engineering immersive program at Flatiron School
                        </li>
                        <li>
                            Experience building web applications using front end and back end technologies and REST APIs (ReactJS, Ruby on Rails, HTML, CSS, Javascript)
                        </li>
                        <li>
                            Educated/trained in fundamentals of object-oriented programming and version control (git)
                        </li>
                    </ul>
                </div>
                <br/>
                <div>
                    {/* Job Title and company */}
                    <span className="Job-title">Fordham University</span>, Psychology
                </div>
                <div>
                    {/* Job dates and location */}
                    <p>Bachelor of Science, May 2016 | New York, NY</p>
                    <ul>
                        <li>
                            Extras/Activities: Sketch Comedy Troupe, Fordham Experimental Theater, Sports Marketing
                        </li>
                    </ul>
                </div>
                <br/>
                <br/>

            </div>
        </>
    )
}

export default Resume