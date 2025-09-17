import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";

function CertificateCard({ certificate }) {
  return (
      <div className="border border-[#1d293a] hover:border-[#464c6a] bg-[#1b203e] transition-all duration-500 rounded-2xl shadow-md overflow-hidden group">

        {/* Certificate Image */}
        <div className="h-32 lg:h-40 w-full overflow-hidden bg-[#12152b] flex items-center justify-center">
          <Image
              src={certificate?.image}
              height={200}
              width={400}
              alt={certificate?.title}
              className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Certificate Info */}
        <div className="p-4 flex flex-col gap-2">
          {/* Title */}
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-400" />
            {certificate?.title}
          </h3>

          {/* Issuer & Date */}
          <p className="text-sm text-[#16f2b3]">
            {certificate?.issuer} • {certificate?.date}
          </p>

          {/* Description */}
          <p className="text-sm text-[#d3d8e8] line-clamp-3">
            {certificate?.description}
          </p>

          {/* View Certificate Link */}
          {certificate?.url && (
              <Link href={certificate.url} target="_blank" className="mt-3">
                <button className="w-full bg-violet-500 text-white py-2 rounded-xl text-sm font-medium hover:bg-violet-600 transition-all">
                  View Certificate
                </button>
              </Link>
          )}
        </div>
      </div>
  );
}

export default CertificateCard;
