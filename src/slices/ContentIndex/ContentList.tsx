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
  fallback_item_image,
  view_more_text = "Read More",
}: ContentListProps) {
  return;
  <div>
    <ul>
        {items.map((items, index)=>(
      <li key={index}>
        <a href="">
          <div>
            <span>{items.data.title}</span>
            <div>
                {items.tags.map((tag, index)=>(
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
