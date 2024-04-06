import { useEffect, useState } from "react";
import CreateHeader from "../components/CreateHeader";
import Process from "../components/Process";
import AirdropForm from "../components/AirdropForm";
import TokenDetails from "../components/TokenDetails";
import Footer from "../components/Footer";
import AirdropModal from "../components/AirdropModal";

const Airdropper = () => {
  const [modal, setModal] = useState(false);
  const [metadata, setMetadata] = useState({
    symbol: "",
    number: "",
    txhash: "",
  });
  console.log("modal", modal);
  return (
    <div className="SpaceGrotesk">
      {modal && (
        <AirdropModal
          setModal={setModal}
          symbol={metadata.symbol}
          number={metadata.number}
          txhash={metadata.txhash}
        />
      )}

      <div className="SpaceGrotesk">
        <CreateHeader />
        <AirdropForm setModal={setModal} setMetadata={setMetadata} />

        <Footer />
      </div>
    </div>
  );
};

export default Airdropper;
