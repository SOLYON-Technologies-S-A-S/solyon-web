// Layout temporal del sitio anterior. Se elimina junto con (legacy)/ en el commit de limpieza.
import "@/styles/globals.css";
import { LanguageProvider } from "@/lib/language";
import MainHeader from "@/components/MainHeader";

export default function LegacyLayout({ children }) {
  return (
    <LanguageProvider>
      <MainHeader />
      {children}
    </LanguageProvider>
  );
}
