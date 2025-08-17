import Image from "next/image";
import Link from "next/link";
// Small circle logo boxes
export default function CompanyLogo({ href, src, alt }: { href: string; src: string; alt: string }) {
  return (
    <Link href={href}>
      <div className="flex items-center justify-center bg-gray-400 h-14 w-14 rounded-full hover:bg-blue-300 transition">
        <Image src={src} width={30} height={30} alt={alt} />
      </div>
    </Link>
  );
}