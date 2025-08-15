import Image from "next/image";
import Link from "next/link";
// Nav links reusable for desktop and mobile
export default function CompanyNavLinks() {
  return (
    <>
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
    </>
  );
}