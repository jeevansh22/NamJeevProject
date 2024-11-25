import React from "react";
import Machinery from "./Machinery";

const Details = () => {
  let machineries=[
    {name:`Classifier MTRA`,
      description:`The fact that the stroke, the angle of throw and the screen
inclination of the MTRA CLASSIFIER are adjustable, allows
the MTRA separator to be used for an exceptionally large
variety of applications`,
      features:[`Free-swinging sieve with unidirectional screen motion,
supported on hollow rubber cylinders`,`Drive by means of vibrators located in the center of
gravity of the machine`,`Adjustable angle of throw`,`Adjustable stroke`,`Adjustable stroke`,`For special applications: with continuously variable screen
slope adjustment, from 2o
 to 6o`,`Modular design`],
      price:`Rs. 10000`,
      image:``
    },{name:`Rubber Huller DRHE`,
      description:`The Bühler TopHusk is a unique, globally leading
paddy rice huller. It is capable of processing up to
120 tonnes of raw material a day and is, therefore,
a key rice processing machine. Rubber rolls are the
most critical wear parts in the huller and the use of
genuine Bühler parts will ensure longer life and high
hulling efficiency. `,
      features:[`High head rice yield`,
         `High hulling degree`,
         `Extra life`,
         `Reduced power usage`,
         `Lower processing cost per tonne`,],
      price:`Rs. 10000`,
      image:``
    },{name:`Paddy Separator GCZ 60x20x2`,
      description:`Paddy and brown rice have different specific weight. During movement of the sieve plate,
the heavier brown rice grains moves to the bottom and paddy flows on the surface.The
pocket structure of sieve plate push brown rice to teh upper side and paddy flow to the
lower side of sieve plate during thus being seprated from each other. `,
      features:[`.Easy to maintenance and repair`],
      price:`Rs. 10000`,
      image:``
    },{name:`Whitener BSPB with 45 kW Motor`,
      description:`The Bühler TopWhiteTM whitener BSPB is used for whitening (i.e. removal of bran) of
brown rice to white rice. It uses the vertical abrasive top to bottom working principle,
which has been proven to achieve the highest whole grain yield. Its main fields of
application are the rice milling industries. The whitener can also be applied to grain,
wheat, barley, and peas processing industries.`,
      features:[`Flexible Adaptation`,
         `Uniform and gentle whitening`,
         `Intensive cooling`,
         `High capacity and efficiency`,
         `Minimum space requirement`,
         `High product quality`,
         `High level of sanitation`,
         `Low power consumption`,
         `Easy Maintenance`,],
      price:`Rs. 10000`,
      image:``,
    },{name:`Polisher DRPN(Silky) with 55KW motor`,
      description:`Not Available`,
      features:[`Compact control unit`,`Easy setting & choking of
polishing pressure`,`Effective aspiration chamber`],
      price:`Rs. 10000`,
      image:``
    },{name:'Magnetic Separator MMUA 50',
      description:`The magnetic separator will be applied in the cleaning house or prior to milling for removing iron parts such as nails, wire, screws, etc.`,
      features:[`Maximum separation effecr in spite of short magnets`,`Magnet can easily be lifted out together with the separated iron parts without interrupting the product flow`, `Dust-tight closed unit`],
      price:`Rs. 10000`,
      image:``
    }
  ]

  return (
    <div>
      {machineries.map((machinery, index) => (
        <Machinery key={index} machineName={machinery.name} />
      ))}
    </div>
  );
};

export default Details;
