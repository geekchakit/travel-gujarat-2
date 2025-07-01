// src/components/Header.js
import { Button, IconButton } from "@material-tailwind/react";
import Wrapper from "./Wrapper";
import { RiMenu4Fill, RiMessage2Line, RiWhatsappLine } from "react-icons/ri";
import { useForm } from "../context/FormContext";

const Header = () => {
  const { openForm } = useForm();

  return (
    <div className="border-b border-black/10 py-4 sm:py-0">
      <Wrapper>
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="w-full flex flex-row py-6">
            <h1 className="text-2xl font-semibold">Gujarat Tour Package</h1>
          </div>
          <div className="flex flex-row items-center gap-2 shrink-0">
            <IconButton className="text-xl rounded-full bg-green-600" size="lg">
              <RiWhatsappLine />
            </IconButton>
            <Button
              className="rounded-full flex flex-row items-center normal-case font-medium text-base"
              size="lg"
              onClick={openForm} // Trigger form opening
            >
              <RiMessage2Line className="text-lg" />
              <span className="hidden sm:inline-block">Get Free Quote</span>
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
