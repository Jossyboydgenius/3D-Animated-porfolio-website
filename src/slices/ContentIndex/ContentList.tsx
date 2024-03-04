"use client";

import { Content, asImageSrc, isFilled } from "@prismicio/client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

type ContentListProps = {
  items: Content.BlogPostDocument[] | Content.ProjectDocument[];
  contentType: Content.ContentIndexSlice["primary"]["content_type"];
  fallbackItemImage: Content.ContentIndexSlice["primary"]["fallback_item_image"];
  viewMoreText: Content.ContentIndexSlice["primary"]["view_more_text"];
};

export default function ContentList({
  items,
  contentType,
  fallbackItemImage,
  viewMoreText = "Read More",
}: ContentListProps) {
  const component = useRef(null);
  const [currentItem, setCurrentItem] = useState<null | number>(null);

  const urlPrefix = contentType === "Blog" ? "/blog" : "/project";

  const contentImages = items.map((item)=>{
    const image = isFilled.image(item.data.image) ? item.data.image : fallbackItemImage;

    return asImageSrc(image, {
      fit: "crop",
      w: 220,
      h: 320,
      exp: -10
    })
  })

  return (
    <div ref={component}>
      <ul className="grid border-b border-b-slate-100">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {isFilled.keyText(item.data.title) && (
              <li key={index} className="list-item opacity-0f">
                <Link
                  href={urlPrefix + "/" + item.uid}
                  className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
                  aria-label={item.data.title || ""}
                >
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold">
                      {item.data.title}
                    </span>
                    <div className="flex gap-3 text-yellow-400 text-lg font-bold">
                      {item.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                    {viewMoreText} <MdArrowOutward />
                  </span>
                </Link>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>

      {/* Hover Element */}
      <div
        className="hover-reveal  pointer-events-none absolute left-0 top-0 -z-10 h-[320px] rounded-lg bg-over bg-center opacity-0 transition-[background] duration-300"
        style={{
          backgroundImage: currentItem !== null ? `url(${contentImages[currentItem]})`: "",
        }}
      ></div>
    </div>
  );
}
