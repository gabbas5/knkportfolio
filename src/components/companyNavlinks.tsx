import Image from "next/image";
import Link from "next/link";

export default function CompanyNavLinks() {
  return (
    <div className="flex items-center gap-6">
      <Link href="/KNK">
        <Image
          src="/logo/knklogo.png"
          width={40}
          height={40}
          alt="KNK Logo"
          className="hover:scale-105 transition-transform"
        />
      </Link>
      <Link href="/KZA">
        <Image
          src="/logo/kzalogo.png"
          width={40}
          height={40}
          alt="KZA Logo"
          className="hover:scale-105 transition-transform"
        />
      </Link>
      <Link href="/Tahmeer">
        <Image
          src="/logo/tahlogo.png"
          width={40}
          height={40}
          alt="Tahmeer Logo"
          className="hover:scale-105 transition-transform"
        />
      </Link>
      <Link href="/news">
        <button className="rounded px-4 py-1 bg-[#5f0f4e] text-white hover:bg-[#4a0c3c] transition-colors">
          NEWS
        </button>
      </Link>
    </div>
  );
}
