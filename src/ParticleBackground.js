import React from "react";
import Particles from "react-tsparticles";
import ParticlesConfig from "./particles-config";

export default function  ParticleBackground(){
    return(<div>
            <Particles params={ParticlesConfig}> <p> hi </p>  </Particles>
        </div>
    )
}

