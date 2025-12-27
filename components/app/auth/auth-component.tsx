import Image from "next/image";
import AuthForm from "./auth-form";

export default function AuthComponent() {
  return (
    <div className="bg-gray-50 w-[60%] h-100 rounded-4xl flex">
      
      {/* Partie gauche : Image */}
      <div className="w-1/2 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="user"
          width={400}
          height={400}
        />
      </div>

      {/* Partie droite : Texte */}
      <div className="w-1/2 flex items-center justify-center">
        <AuthForm />      
      </div>

    </div>
  );
}