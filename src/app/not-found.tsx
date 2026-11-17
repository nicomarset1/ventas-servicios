import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { whatsappUrl } from "./content";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <Header base="/" />
      <main className={`container ${styles.page}`}>
        <h1>Esta página no existe</h1>
        <p className={styles.copy}>Puede que el link esté mal o que la página ya no esté.</p>
        <div className={styles.actions}>
          <Link className="btn btn-primary" href="/">
            <ArrowLeft size={18} aria-hidden="true" />
            Volver al inicio
          </Link>
          <a className="btn btn-ghost" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={19} />
            Escribinos por WhatsApp
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
