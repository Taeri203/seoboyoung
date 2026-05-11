import { ImageWithFallback } from "@/components/common/ImageWithFallback";

type CampaignImageBlockProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export function CampaignImageBlock({ src, alt, title, description }: CampaignImageBlockProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white shadow-sm">
      <ImageWithFallback src={src} alt={alt} className="h-[360px]" imgClassName="object-contain bg-[#FFF9E8] p-2" />
      <div className="p-5">
        <h3 className="text-2xl font-black text-[#11205A]">{title}</h3>
        <p className="mt-2 leading-7 text-[#667085]">{description}</p>
      </div>
    </article>
  );
}
