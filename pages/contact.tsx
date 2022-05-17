import React from 'react';
import { AiFillPhone, AiOutlineMail, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

const iconSize = '1.5rem';

const ContactBtn = ({
  text,
  icon,
  href,
}: {
  text: string;
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border shadow rounded-md px-4 py-3 w-64 flex items-center justify-start gap-x-8"
    >
      <>
        {icon} {text}
      </>
    </a>
  );
};

export default function Contact() {
  return (
    <div>
      <address className="gap-y-4 flex flex-col">
        <ContactBtn
          text="+ 371 25369838"
          href="tel:+37125369838"
          icon={<AiFillPhone size={iconSize} />}
        />
        <ContactBtn
          text="info@kdi.lv"
          href="mailto:info@kdi.lv"
          icon={<AiOutlineMail size={iconSize} />}
        />
        <ContactBtn
          text="@KristineKolthof"
          href="https://www.instagram.com/kristinekolthof"
          icon={<AiOutlineInstagram size={iconSize} />}
        />
        <ContactBtn
          text="+ 31 612419926"
          href="https://wa.me/31612419926"
          icon={<AiOutlineWhatsApp size={iconSize} />}
        />
      </address>
    </div>
  );
}
