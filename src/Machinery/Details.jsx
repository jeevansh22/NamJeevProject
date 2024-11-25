import React from "react";
import Machinery from "./Machinery";

const Details = () => {
  //   let machineries = [
  //     {
  //       name: "SmartWhite.DRWD Whitener.",
  //       price: "Rs.5000",
  //       application: `The fact that the stroke, the angle of throw and the screen
  // inclination of the MTRA CLASSIFIER are adjustable, allows
  // the MTRA separator to be used for an exceptionally large
  // variety of applications. `,
  //       features: [
  //         `Free-swinging sieve with unidirectional screen motion,
  // supported on hollow rubber cylinders`,
  //         `Drive by means of vibrators located in the center of
  // gravity of the machine`,
  //         `Adjustable angle of throw`,
  //         `Adjustable stroke`,
  //         `Screen inclination preset at the works, made to suit the
  // place of application, adjustment to between 2° and 12°`,
  //         `For special applications: with continuously variable screen
  // slope adjustment, from 2° to 6°`,
  //         `Modular design`,
  //       ],
  //     },
  //     {
  //       name: `TopHuskTM Huller and Husk Separator.DRHE/DRSD`,
  //       price: 'Rs. 10000',
  //       application:`The TopHuskTM hulls paddy rice with highest care and efficiency. `,
  //       features:[`High head rice yield`,`High hulling degree`,`High capacity`,`Accurate husk separation`,`Consistent product quality`]
  //     },
  //     {
  //       name: `Cyclone Separator`,
  //       price:`Rs. 10000`,
  //       application:`Centrifugal separators (cyclones) have proven to be
  // particularly efficient for separating dust from gas
  // streams. The MGXG cyclone is a centrifugal separator
  // satisfying the most stringent industrial requirements. `,
  //       features:[`High separating efficiency`,`High operating reliability`,`Top sanitation`,`No maintenance`]
  //     },
  //     {
  //       name: `DRTA Paddy Separater`,
  //       price:`Rs. 10000`,
  //       application:,
  //       features:
  //     },
  //     {
  //       name:`Magnetic Separator`,
  //       price:`Rs. 10000`,
  //       application:`The magnetic separator will be applied in the cleaning house or prior to milling for removing iron parts such as nails, wire, screws, etc.`,
  //       features:[`Maximum separation effect in spite of short magnets`,
  //         `Magnet can easilt be lifted out together with the separated iron parts without interrupting the product flow`,
  //         `Dust-tight closed unit`
  //       ]
  //     },
  //     {
  //       name:`MTRA/MVSF Separator Classifier/Aspirator.`,
  //       price:`Rs. 10000`,
  //       application: `The fact that the stroke, the angle of throw and the screen inclination of the MTRA CLASSIFIER are adjustable, allows
  // the MTRA separator to be used for an exceptionally large
  // variety of applications`,
  //       features:[`Free-swinging sieve with unidirectional screen motion,
  // supported on hollow rubber cylinders`,
  //  `Drive by means of vibrators located in the center of
  // gravity of the machine`,
  //  `Adjustable angle of throw`,
  //  `Adjustable stroke`,
  //  `Screen inclination preset at the works, made to suit the
  // place of application, adjustment to between 2o
  //  and 12o`,
  //  `For special applications: with continuously variable screen
  // slope adjustment, from 2o
  //  to 6o`,
  //  `Modular design`]
  //     },
  //     {
  //       name:
  //       price:`Rs. 10000`
  //       application:,
  //       features:,
  //     },
  //     {
  //       name:
  //       price:`Rs. 10000`
  //       application:
  //       features:
  //     },
  //     {
  //       name:
  //       price:`Rs. 10000`
  //       application:
  //       features:
  //     },
  //     {
  //       name:
  //       price:`Rs. 10000`
  //       application:
  //       features:
  //     },
  //     {
  //       name:
  //       price:`Rs. 10000`
  //       application:
  //       features:
  //     },
  //     {
  //       name:
  //       price:`Rs. 10000`
  //       application:
  //       features:
  //     }
  //   ];

  return (
    <div>
      {machineries.map((machinery, index) => (
        <Machinery key={index} machineName={machinery.name} />
      ))}
    </div>
  );
};

export default Details;
