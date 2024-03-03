import { Content } from "@prismicio/client";
import React from "react";

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
  return;
  <div>
    <ul className="grid border-b border-b-slate-100">
      {items.map((items, index) => (
        <li key={index} className="list-item opacity-0f">
          <a
            href=""
            className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
          >
            <div>
              <span>{items.data.title}</span>
              <div>
                {items.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
            <span>{viewMoreText}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>;
}
