import Image from "next/image";
import { LogoutButon, LogoutButton } from "./componenets/clientComponents";
import Navbar from "./componenets/navbar";
import JoinButton from "./componenets/JoinButton";

export default function Home() {
  return (
    <main>
      <div className="first">
        <Navbar />
        <LogoutButton />
        <JoinButton />
      </div>
    </main>
  );
}
