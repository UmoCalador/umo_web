import Image from "next/image";

export const GalleryLetter = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1"> 
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src="/img/our_letter.png" alt="" fill className="object-cover" />
      </div>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src="/img/our_letter.png" alt="" fill className="object-cover" />
      </div>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src="/img/our_letter.png" alt="" fill className="object-cover" />
      </div>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src="/img/our_letter.png" alt="" fill className="object-cover" />
      </div>
    </div>
  );
};
