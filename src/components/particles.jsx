import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./particles.scss"

const initParticles = async (engine) => {
    await loadSlim(engine);
};

function Particle() {
    return (
        <ParticlesProvider init={initParticles}>
            <Particles id="tsParticles" className="particles-canvas"
            options={{
                particles:{
                    number:{value:30},
                    color:{value:"#ffffff"},
                    shape:{type:"circle"},
                    size:{value:1.3},
                    move:{
                        enable:true,
                        speed:1,
                        outModes:{default:"bounce"}  
                    },
                    links:{
                        enable:true,
                        opacity:0.1
                    }
                },
                interactivity:{
                    events:{
                        onHover:{
                            enable:true,
                            mode:"repulse"
                        }
                    },
                    modes:{
                        repulse:{
                            duration:0.1,
                            distance:50
                        }
                    }
                },
                fullScreen: {enable:false}
            }} />
        </ParticlesProvider>
    );
}
export default Particle