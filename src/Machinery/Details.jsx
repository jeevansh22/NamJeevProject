import React from "react";
import Machinery from "./Machinery";

const Details = () => {
  let machineries = [
    {
      name: "SmartWhite.DRWD Whitener.",
      price: "Rs.5000",
      application: `The fact that the stroke, the angle of throw and the screen
inclination of the MTRA CLASSIFIER are adjustable, allows
the MTRA separator to be used for an exceptionally large
variety of applications. `,
      features: [
        `Free-swinging sieve with unidirectional screen motion,
supported on hollow rubber cylinders`,
        `Drive by means of vibrators located in the center of
gravity of the machine`,
        `Adjustable angle of throw`,
        `Adjustable stroke`,
        `Screen inclination preset at the works, made to suit the
place of application, adjustment to between 2° and 12°`,
        `For special applications: with continuously variable screen
slope adjustment, from 2° to 6°`,
        `Modular design`,
      ],
    },
  ];

  return (
    <div>
      {machineries.map((machinery, index) => (
        <Machinery key={index} machineName={machinery.name} />
      ))}
    </div>
  );
};

export default Details;
