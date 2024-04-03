import { useEffect, useState } from "react";
import CreateHeader from "../components/CreateHeader";
import Process from "../components/Process";
import FormField from "../components/FormField";
import TokenDetails from "../components/TokenDetails";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

const Create = () => {
  const [modal, setModal] = useState(false);
  const [metadata, setMetadata] = useState({
    name: "",
    symbol: "",
    txhash: "",
  });
  console.log("modal", modal);
  return (
    <div className="SpaceGrotesk">
      {modal && (
        <Modal
          setModal={setModal}
          name={metadata.name}
          symbol={metadata.symbol}
          txhash={metadata.txhash}
        />
      )}

      <div className="SpaceGrotesk">
        <CreateHeader />
        <Process />
        <FormField
          setModal={setModal}
          setMetadata={setMetadata}
          metadata={metadata}
        />
        <TokenDetails />
        <Footer />
      </div>
    </div>
  );
};

export default Create;
