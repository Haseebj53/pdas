import "bulma/css/bulma.css";
import SiriImage from "./images/siri.png";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistant</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa02"
                image={AlexaImage}
                description="Alexa is the name of the voice that comes out of Alexa-enabled speakers."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana123"
                image={CortanaImage}
                description="Cortana is a voice-activated assistant that helps you achieve more."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri1"
                image={SiriImage}
                description="Siri is an easy way to make calls, send text messages, use apps and get things done."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
