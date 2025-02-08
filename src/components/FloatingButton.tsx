import Link from 'next/link';
import Image from 'next/image';

export default function FloatingButton() {
  return (
    <Link
      href="https://wa.me/5521992565976"
      className="fixed bottom-12 right-4 bg-green-500 text-white p-3 hover:bg-green-600 rounded-full shadow-xl hover:shadow-2xl z-50 flex items-center justify-center"
    >
      <Image
        src="/homeIcons/whatsapp.png"
        alt="Ícone do botão"
        width={24}
        height={24}
        className="w-8 h-8 md:w-12 md:h-12"
      />
    </Link>
  );
}
