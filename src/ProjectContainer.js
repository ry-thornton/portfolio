import React from "react";

function ProjectContainer(props) {
  let renderDescription = () => {
    switch (props.project) {
      case "GOffee":
        return (
          <p>
            <h3>Technologies</h3>
            React/Javascript, Firebase/NodeJS, HTML, CSS, Bulma, Stripe, Mapbox
            <h3>About</h3>
            GOffee is a consumer services company specializing in coffee
            delivery for offices and residences. Our ordering platform is
            designed to facilitate creating and joining group coffee orders as
            well as adding customized drinks, splitting checks, and scheduling
            deliveries.
            <div>
                {/* Screen shots of goffee */}
                <br/>
                <img className="GOffee-img" src="goffee-home-screen.png"/>
                <img className="GOffee-img" src="goffee-search.png"/>
                <img className="GOffee-img" src="goffee-drinks.png"/>
                <img  className="GOffee-img" src="goffee-beverages.png"/>
                <img className="GOffee-img" src="goffee-checkout.png"/>
            </div>
          </p>
        );
      case "CoffeeHood":
        return (
          <p>
            <h3>Technologies</h3>
            React, Ruby on Rails, HTML, CSS, Javascript, Bootstrap, Mapbox,
            Zomato API
            <h3>About</h3>
            Coffeehood is a search engine that helps users find coffee shops in
            there local area. Search results provide detailed information about
            each shop including its address, hours, and unique set of store
            specific features.
            <h3>Details</h3>
            <ul>
              <li>
                Utilized LocationIQ and Zomato API to create geolocations based
                on user’s input and pull data on cafes in those areas{" "}
              </li>
              <li>
                Manipulated Mapbox API and React Mapbox to construct an
                interactive map for users to use as an alternative search tool
              </li>
              <li>
                Built easy to use UI components with React, and React Bootstrap
                as well as custom CSS to include search forms, and display cards
                for coffee shops
              </li>
            </ul>
            <br />
            <video className="Video" controls>
              <source src={`${props.project}.mov`}></source>
            </video>
          </p>
        );
      case "NBApp":
        return (
          <p>
            <h3>Technologies</h3>
            Ruby on Rails, HTML, CSS, Balldontlie API, Rapid API
            <h3>About</h3>
            NBApp is a visual database of NBA player, team, and game
            data/statistics. The purpose of this project was to create a
            platform for fans to keep up to date with their favorite players and
            teams.
            <h3>Details</h3>
            <ul>
              <li>
                Populated backend database with NBA player, team, and game
                information pulled from balldontlie.io and Rapid API in JSON
                format
              </li>
              <li>
                Created following and commenting functions for users,
                solidifying understanding of object-oriented programming
              </li>
            </ul>
            <br />
            <video className="Video" controls>
              <source src={`${props.project}.mov`}></source>
            </video>
          </p>
        );
    }
  };
  return (
    <div className="content container">
      <h1>{props.project}</h1>
      {renderDescription()}
      <br />
    </div>
  );
}

export default ProjectContainer;
