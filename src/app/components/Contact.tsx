"use client";

import { useState } from "react";
import { contact, whatsappLink } from "../content";
import WhatsAppIcon from "./WhatsAppIcon";
import styles from "./Contact.module.css";

// Cierre: la persona elige qué busca y se abre WhatsApp con el mensaje ya escrito.
export default function Contact() {
  const [option, setOption] = useState("");
  const [detail, setDetail] = useState("");

  const href = whatsappLink(contact.message(option, detail));

  return (
    <section id="contacto" className={styles.section} aria-labelledby="contacto-title" data-hide-mobile-cta>
      <div className={`container ${styles.layout}`}>
        <div className={styles.head}>
          <h2 id="contacto-title">{contact.title}</h2>
          <p className="lead">{contact.lead}</p>
        </div>

        <div className={styles.form}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.label}>{contact.question}</legend>
            <div className={styles.options}>
              {contact.options.map((item) => (
                <label key={item} className={styles.option}>
                  <input
                    type="radio"
                    name="busqueda"
                    value={item}
                    checked={option === item}
                    onChange={() => setOption(item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className={styles.label} htmlFor="detalle">
            {contact.detailLabel}
          </label>
          <textarea
            id="detalle"
            className={styles.textarea}
            rows={3}
            value={detail}
            placeholder={contact.detailPlaceholder}
            onChange={(event) => setDetail(event.target.value)}
          />

          <a className={`btn btn-primary ${styles.send}`} href={href} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            {contact.cta}
          </a>
          <p className={styles.note}>{contact.note}</p>
        </div>
      </div>
    </section>
  );
}
