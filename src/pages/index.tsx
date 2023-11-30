import { type NextPage } from "next";
import Image from "next/image";
import { Fireworks } from '@fireworks-js/react'

const Home: NextPage = () => {

  return (
    <>
      <main className="flex min-h-screen bg-gradient-to-b from-[#35495D] to-[#000000]">
        {/* <div className="absolute top-32 right-96"><Image src="https://raw.githubusercontent.com/wilmoore/wonlogo.svg/main/index.svg" width={350} height={350} alt="wonlog.svg" /></div> */}
        {/* <div className="absolute bottom-32 right-96"><Image src="https://raw.githubusercontent.com/wilmoore/wonlogo.svg/main/index.svg" width={350} height={350} alt="wonlog.svg" /></div> */}
        <Fireworks
          options={{
            autoresize: true,
            opacity: 0.5,
            acceleration: 1.05,
            friction: 0.97,
            gravity: 1.5,
            particles: 50,
            traceLength: 3,
            traceSpeed: 10,
            explosion: 5,
            intensity: 30,
            flickering: 50,
            lineStyle: 'round',
            hue: {
              min: 0,
              max: 360
            },
            delay: {
              min: 30,
              max: 60
            },
            rocketsPoint: {
              min: 0,
              max: 100 
            },
            lineWidth: {
              explosion: {
                min: 1,
                max: 3
              },
              trace: {
                min: 1,
                max: 2
              }
            },
            brightness: {
              min: 50,
              max: 80
            },
            decay: {
              min: 0.015,
              max: 0.03
            },
            mouse: {
              click: false,
              move: false,
              max: 1
            }
          }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
            background: 'transparent'
          }}
        />
      </main>
    </>
  );
};

export default Home;