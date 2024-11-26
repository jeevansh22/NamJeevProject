import React from "react";
import image1 from "../../public/Pdfs/MTRA Brochure_GE_20.10.21 (1).pdf";
const DownloadCatalogue = () => {
  const catalogues = [
    {
      title: "SmartWhite.DRWD Whitener",
      link: "/Pdfs/622d55982a6c4416b62e9673c451265d.pdf",
    },
    {
      title: "Deschinadora.MTSD.",
      link: "/Pdfs/Brochure_GM_IM_Destoner_MTSD_ES_LQ_BID21.pdf",
    },
    {
      title: "TopWhiteTM II Whitener BSPB.",
      link: "/Pdfs/BSPB Whitener Brochure.pdf",
    },
    {
      title: "Extra Life Rubber Rolls.for TopHusk™ hullerDRHC and DRHE.",
      link: "/Pdfs/DRHE_ Rubber Rolls_Flyer.pdf",
    },
    {
      title: "Extra Life Rubber Rolls.for TopHusk™ hullerDRHC and DRHE",
      link: "/Pdfs/DRHE_ Rubber Rolls_Flyer_en.pdf",
    },
    {
      title: "DRPNHighPoly Polisher Product Presentation",
      link: "/Pdfs/DRPN.pdf",
    },
    {
      title: "SDRTA Paddy Separater ——R&D Maggie zhao",
      link: "/Pdfs/DRTA_ppt.pdf",
    },
    {
      title: "DRTA Paddy Separater ——R&D Maggie zhao ",
      link: "/Pdfs/DRTA_presentation.pdf",
    },
    {
      title: "TopHuskTM Huller and Husk Separator. DRHE/DRSD",
      link: "/Pdfs/GQ_Huller_Husk separator_DRHE_DRSD_Brochure_LQ_BID21.pdf",
    },
    {
      title: "Cyclone separator.",
      link: "/Pdfs/MGXG_MGXG Cyclone separator_23136_EN.pdf",
    },
    {
      title: "Magnetic separator.",
      link: "/Pdfs/MMUA_MMUA Magnetic Separator_11739_en.pdf",
    },
    {
      title: "MTRA/MVSF Separator Classifier/Aspirator.",
      link: "/Pdfs/MTRA Brochure_GE_20.10.21 (1).pdf",
    },
  ];

  return (
    <div className="bg-white text-white min-h-screen m-12 rounded-md">
      <div className="container mx-auto px-4 py-10">
        <h1 className="bg-white text-black text-3xl font-bold text-center">
          Download Catalogue
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
          {catalogues.map((catalogue, index) => (
            <div
              key={index}
              className="bg-white text-center rounded-md shadow-2xl p-6 text-black"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-red-500 rounded-md w-20 h-28 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">PDF</span>
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-4">{catalogue.title}</h2>
              <a
                href={catalogue.link}
                className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium py-2 px-4 rounded"
              >
                Download Catalogue
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadCatalogue;
