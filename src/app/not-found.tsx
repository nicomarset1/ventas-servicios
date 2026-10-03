import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Footer from "./components/Footer";
import { whatsappUrl } from "./content";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={`container ${styles.content}`}>
          <Link href="/" className={styles.brand}>
            <Image src="/logo-circle.png" alt="" width={36} height={36} />
            NM Software
          </Link>
          <p className={`eyebrow ${styles.eyebrow}`}>Error 404</p>
          <h1>Esta página no existe</h1>
          <p className={styles.copy}>Puede que el link esté mal o que la página ya no esté.</p>
          <div className={styles.actions}>
            <Link className="button button-primary" href="/">
              <ArrowLeft size={18} aria-hidden="true" />
              Volver al inicio
            </Link>
            <a className="button button-ghost" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} aria-hidden="true" />
              Escribime por WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
